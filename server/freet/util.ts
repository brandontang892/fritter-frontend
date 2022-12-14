import type {HydratedDocument} from 'mongoose';
import moment from 'moment';
import type {Freet, PopulatedFreet} from '../freet/model';

// Update this if you add a property to the Freet type!
type FreetResponse = {
  _id: string;
  author: string;
  dateCreated: string;
  content: string;
  dateModified: string;
  anonymous: string;
  local: string;
  city: string;
};

type AnonFreetResponse = {
  _id: string;
  hidden_author: string;
  dateCreated: string;
  content: string;
  dateModified: string;
  anonymous: string;
  local: string;
  city: string;
};

/**
 * Encode a date as an unambiguous string
 *
 * @param {Date} date - A date object
 * @returns {string} - formatted date as string
 */
const formatDate = (date: Date): string => moment(date).format('MMMM Do YYYY, h:mm:ss a');

/**
 * Transform a raw Freet object from the database into an object
 * with all the information needed by the frontend
 *
 * @param {HydratedDocument<Freet>} freet - A freet
 * @returns {FreetResponse} - The freet object formatted for the frontend
 */
const constructFreetResponse = (freet: HydratedDocument<Freet>): FreetResponse => {
  const freetCopy: PopulatedFreet = {
    ...freet.toObject({
      versionKey: false // Cosmetics; prevents returning of __v property
    })
  };
  const {username} = freetCopy.authorId;

  const cityname = freetCopy.city;
  delete freetCopy.authorId;
  delete freetCopy.city;

  return {
    ...freetCopy,
    _id: freetCopy._id.toString(),
    author: username,
    city: cityname,
    dateCreated: formatDate(freet.dateCreated),
    dateModified: formatDate(freet.dateModified)
  };
};

/**
 * Transform a raw Freet object from the database into an object
 * with all the information needed by the frontend
 *
 * @param {HydratedDocument<Freet>} freet - A freet
 * @returns {AnonFreetResponse} - The freet object formatted for the frontend
 */
const constructAnonFreetResponse = (freet: HydratedDocument<Freet>): AnonFreetResponse => {
  const freetCopy: PopulatedFreet = {
    ...freet.toObject({
      versionKey: false // Cosmetics; prevents returning of __v property
    })
  };

  const cityname = freetCopy.city;
  delete freetCopy.city;
  
  return {
    ...freetCopy,
    _id: freetCopy._id.toString(),
    hidden_author: "USER IS ANONYMOUS",
    city: cityname,
    dateCreated: formatDate(freet.dateCreated),
    dateModified: formatDate(freet.dateModified)
  };
};


export {
  constructFreetResponse,
  constructAnonFreetResponse
};

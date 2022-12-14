import type {HydratedDocument, Types} from 'mongoose';
import type {Friend} from './model';
import FriendModel from './model';
import UserCollection from '../user/collection';

/**
 */
class FriendCollection {
  /**
   *
   * @param {string} 
   * @param {string} 
   * @return {Promise<HydratedDocument<Friend>>} 
   */
  static async addOne(UserA: string, UserB: string, status: string): Promise<HydratedDocument<Friend>> {
    console.log("arrived");
    const friend = new FriendModel({
      UserA,
      UserB,
      status,
    });
    console.log('new friend added');
    await friend.save(); 
    console.log('friend saved');
    return friend.populate('UserA');
  }

  static async updateOne(friend_id: string, status: string): Promise<HydratedDocument<Friend>> {
    const friend = await FriendModel.findOne({_id: friend_id});
    friend.status = status;
    await friend.save();
    return friend.populate('UserA');
  }

}

export default FriendCollection;
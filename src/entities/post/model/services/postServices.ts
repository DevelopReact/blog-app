//api
import { apiInstance } from '@/shared/libs/utils/apiInstance';
//actions type
import {
  AddPostAction,
  DeletePostAction,
  GetPostAction,
  UpdatePostAction
} from '../types/postActions';
//services type
import { GetPostsResponse } from '../types/postServicesType';
//types
import { IPost } from '../types/postTypes';

class postService {
  private POST_SERVICE_ENDPOINT = '/posts';

  async getPosts() {
    return apiInstance.get<GetPostsResponse>(this.POST_SERVICE_ENDPOINT);
  }

  async getPost(id: GetPostAction['payload']) {
    return apiInstance.get<IPost>(`${this.POST_SERVICE_ENDPOINT}/${id}`);
  }

  async createPost(post: AddPostAction['payload']) {
    return apiInstance.post<IPost>(this.POST_SERVICE_ENDPOINT, post);
  }

  async deletePost(id: DeletePostAction['payload']) {
    return apiInstance.delete<number>(`${this.POST_SERVICE_ENDPOINT}/${id}`);
  }

  async updatePost({ id, updateFields }: UpdatePostAction['payload']) {
    return apiInstance.patch(
      `${this.POST_SERVICE_ENDPOINT}/${id}`,
      updateFields
    );
  }
}

export const postServices = new postService();

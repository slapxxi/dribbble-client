// @flow
import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import type { Shot, ShotsResponse, ShotCategory } from './types';

const TOKEN =
  'eb9f112cd1a529dee4fb526c9ce156894a67182961e4c117086321c6db928423';

async function fetchShots(
  type: ShotCategory = 'popular',
  page: number = 1,
  perPage: number = 16,
): Promise<ShotsResponse> {
  const response: AxiosResponse = await axios(
    request(type, page, perPage),
  );
  const { data } = response;
  const shots = data.map(mapResponseToShot);
  const users = data.map(mapResponseToUser);
  return { type, users, shots };
}

function request(
  type: ShotCategory,
  page: number,
  perPage: number,
): AxiosRequestConfig {
  return {
    url: `https://api.dribbble.com/v1/shots?per_page=${perPage}
      ${matchTypeToParams(type)}&page=${page}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
}

function matchTypeToParams(type: ShotCategory) {
  if (type === 'debuts') {
    return '&list=debuts';
  }
  if (type === 'recent') {
    return '&sort=recent';
  }
  return '';
}

function mapResponseToShot(response): Shot {
  return {
    id: response.id,
    title: response.title,
    author: response.user.id,
    viewsCount: response.views_count,
    likesCount: response.likes_count,
    commentsCount: response.comments_count,
    description: response.description,
    images: {
      normal: response.images.normal,
      hidpi: response.images.hidpi || response.images.normal,
      teaser: response.images.teaser,
    },
  };
}

function mapResponseToUser(response) {
  return {
    id: response.user.id,
    name: response.user.name,
    avatarURL: response.user.avatar_url,
  };
}

export default fetchShots;

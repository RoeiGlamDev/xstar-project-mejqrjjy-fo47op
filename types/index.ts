import React from 'react';

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  createdAt: Date;
}

export interface User {
  id: string;
  username: string;
  email: string;
  profilePictureUrl: string;
}

export interface Comment {
  id: string;
  videoId: string;
  userId: string;
  content: string;
  createdAt: Date;
}

export interface VideoProps {
  video: Video;
}

export interface UserProps {
  user: User;
}

export interface CommentProps {
  comment: Comment;
}

export default {
  Video,
  User,
  Comment,
  VideoProps,
  UserProps,
  CommentProps,
};
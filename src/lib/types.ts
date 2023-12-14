type AssetReference = {
  _ref: string;
  metadata: {
    lqip: string;
  };
};

type Image = {
  _type: string;
  asset: AssetReference;
};

type Tag = {
  _key: string;
  _type: string;
  tag: string;
};

export type Member = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  chineseName: string;
  description: string;
  englishName: string;
  hometown: string;
  instagramAccount: string;
  profileImage: Image;
  tags: Tag[];
  _updatedAt: string;
};

export type RecentActivity = {
  _id: string;
  title: string;
  description: string;
  instagramPostID: string;
};

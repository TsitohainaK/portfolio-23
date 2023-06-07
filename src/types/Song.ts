export type SongMassive = {
  title:string,
  artist:string,
  artwork?:string|null,
  filename:string
}

export type SongAttributes = {
  id:string;
  artist:string;
  title:string;
  artwork?:string|null;
  description?:string|null;
  filename:string;
  ownerId:string;
  owner:{
    username:string;
    artistname:string;
  };
  _count:{
    comment:number;
    favoritedBy:number;
  }
}
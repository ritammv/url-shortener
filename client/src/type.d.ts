interface Url {
  id: string;
  longUrl: string;
  shortUrl: string;
  dateCreated: string;
  urlCode: string;
  datesAccessed: Array;
}

interface UserUrl {
  longUrl: string;
  code: string;
}

interface ParamTypes {
  code: string;
}

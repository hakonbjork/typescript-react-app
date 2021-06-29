import MemberEntity from "../model/members";
import axios, { AxiosResponse } from "axios";

const gitHubURL = "http://api.github.com";
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

const mapMemberListApiToModel = ({
  data,
}: AxiosResponse<any[]>): MemberEntity[] =>
  data.map((githubMember) => ({
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url,
  }));

const getMembersCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    try {
      axios
        .get<MemberEntity[]>(gitHubMembersUrl)
        .then((response) => resolve(mapMemberListApiToModel(response)));
    } catch (ex) {
      reject(ex);
    }
  });

  return promise;
};

export default getMembersCollection;

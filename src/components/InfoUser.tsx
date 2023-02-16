import { IoLocationSharp } from "react-icons/io5";
import { BiLinkAlt } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { User } from "../interfaces/User";
import { ErrorSearchUser } from "./ErrorSearchUser";
import { LinkUser } from "./LinkUser";
import { formatDate } from "../helpers/formatDate";

interface Props {
  user: null | User;
  isLoading: boolean;
  hasError: boolean;
  textError: null | string;
}

export const InfoUser = ({ user, isLoading, hasError, textError }: Props) => {
  const joined = formatDate(user?.created_at as string);
  if (hasError) {
    return <ErrorSearchUser textError={textError} />;
  }

  return (
    <aside className="user">
      <div className="user-header">
        <img src={user?.avatar_url} alt="kevin" className="user-avatar" />
        <div className="user-info">
          <h1 className="user-name">{user?.name}</h1>
          <span className="user-username">@{user?.login}</span>
          <span className="user-joined">Joined {joined}</span>
        </div>
      </div>
      <div className="user-body">
        <p className="user-bio">
          {!user?.bio ? "this profile has no bio" : user?.bio}
        </p>
        <div className="user-statistics">
          <div className="statistic">
            <span className="statistic-title">Repos</span>
            <p className="statistic-value">{user?.public_repos}</p>
          </div>
          <div className="statistic">
            <span className="statistic-title">Followers</span>
            <p className="statistic-value">{user?.followers}</p>
          </div>
          <div className="statistic">
            <span className="statistic-title">Following</span>
            <p className="statistic-value">{user?.following}</p>
          </div>
        </div>
        <ul className="user-social-networks">
          <LinkUser link={user?.location} icon={<IoLocationSharp />}>
            <span>{user?.location}</span>
          </LinkUser>
          <LinkUser link={user?.twitter_username} icon={<IoLogoTwitter />}>
            <span>{user?.twitter_username}</span>
          </LinkUser>
          <LinkUser link={user?.blog} icon={<BiLinkAlt />}>
            <a href={user?.blog as string}>{user?.blog}</a>
          </LinkUser>
          <LinkUser link={user?.avatar_url} icon={<HiBuildingOffice2 />}>
            <a href={user?.html_url}>@github</a>
          </LinkUser>
        </ul>
      </div>
    </aside>
  );
};

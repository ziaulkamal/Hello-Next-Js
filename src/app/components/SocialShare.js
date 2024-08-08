import Image from "next/image";
import Link from "next/link";

const SocialShare = ({url}) => {

  const targetUrl = url || '#';
  return (
    <div className="col-md-6">
      <div className="post_share_link">
        <ul className="social_icons_block unordered_list justify-content-md-end">
          <li>
            <Link className="rounded-circle" href={targetUrl}>
              <Image width={7} height={13} src="/images/icons/icon_facebook.svg" alt="Icon Facebook"/>
            </Link>
          </li>
          <li>
            <Link className="rounded-circle" href={targetUrl}>
              <Image width={12} height={12} src="/images/icons/icon_twitter_x.svg" alt="Icon Twitter X"/>
            </Link>
          </li>
          <li>
            <Link className="rounded-circle" href={targetUrl}>
              <Image width={13} height={12} src="/images/icons/icon_linkedin.svg" alt="Icon Linkedin"/>
            </Link>
          </li>
          <li>
            <Link className="rounded-circle" href={targetUrl}>
              <Image width={16} height={16} src="/images/icons/icon_instagram.svg" alt="Icon Instagram"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialShare;
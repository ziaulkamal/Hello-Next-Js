import Image from "next/image";


const SocialAuthor = ({ image, authorName, bio, linkedin, instagram, website }) => {

    function getImage(image) {
        return image || '/images/avatar/avatar_8.webp';
    }

    function getAuthor(authorName) {
        return authorName || 'Admin';
    }

    function getBio(bio) {
        return bio || 'A content editor plays a pivotal role in shaping and refining the narrative and quality of digital content. This role involves overseeing the creation.';
    }

    const setImage = getImage(image);
    const setAuthor = getAuthor(authorName);
    const setBio = getBio(bio);
    return(

        <div className="post_author_box">
            <div className="author_image">
                <Image width={150} height={150}
                    src={setImage}
                    alt={setAuthor}
                />
                </div>
            <div className="author_content">
                <h3 className="author_name">{setAuthor}</h3>
                <h4 className="author_designation">Writers Enthusiast</h4>
                <p>
                    {setBio}
                </p>
            </div>
        </div>
   
    
    );
}

export default SocialAuthor;
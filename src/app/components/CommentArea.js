

const CommentArea = () =>{
    return (
<>
  <hr classname="m-0" />
  <div classname="comment_area">
    <h3 classname="details_item_info_title mb-5">Comments (3)</h3>
    <ul classname="comments_list unordered_list_block">
      <li>
        <div classname="comment_item">
          <div classname="comment_author_thumbnail">
            <img
              src="/images/avatar/avatar_9.webp"
              alt="Techco - Comment Author Avatar"
            />
          </div>
          <div classname="comment_author_content">
            <h4 classname="comment_author_name">John Smith</h4>
            <div classname="comment_time">Dec 24, 2024 at 10:21am</div>
            <p classname="mb-0">
              "Working with Techco has been a game-changer. Their innovative IT
              solutions boosted our efficiency tenfold. Highly recommend!"
            </p>
            <a classname="comment_reply_btn" href="#!">
              Reply
            </a>
          </div>
        </div>
        <ul classname="comments_list unordered_list_block">
          <li>
            <div classname="comment_item">
              <div classname="comment_author_thumbnail">
                <img
                  src="/images/avatar/avatar_10.webp"
                  alt="Techco - Comment Author Avatar"
                />
              </div>
              <div classname="comment_author_content">
                <h4 classname="comment_author_name">Daniel Garcia</h4>
                <div classname="comment_time">Dec 24, 2024 at 10:21am</div>
                <p classname="mb-0">
                  "Our experience with Techco has been exceptional. Their
                  commitment to customer satisfaction stands out. Grateful for
                  their partnership."
                </p>
                <a classname="comment_reply_btn" href="#!">
                  Reply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div classname="comment_item">
              <div classname="comment_author_thumbnail">
                <img
                  src="/images/avatar/avatar_9.webp"
                  alt="Techco - Comment Author Avatar"
                />
              </div>
              <div classname="comment_author_content">
                <h4 classname="comment_author_name">John Smith</h4>
                <div classname="comment_time">Dec 24, 2024 at 10:21am</div>
                <p classname="mb-0">
                  "Working with Techco has been a game-changer. Their innovative
                  IT solutions boosted our efficiency tenfold. Highly
                  recommend!"
                </p>
                <a classname="comment_reply_btn" href="#!">
                  Reply
                </a>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div classname="comment_item">
          <div classname="comment_author_thumbnail">
            <img
              src="/images/avatar/avatar_11.webp"
              alt="Techco - Comment Author Avatar"
            />
          </div>
          <div classname="comment_author_content">
            <h4 classname="comment_author_name">John Smith</h4>
            <div classname="comment_time">Dec 24, 2024 at 10:21am</div>
            <p classname="mb-0">
              "Working with Techco has been a game-changer. Their innovative IT
              solutions boosted our efficiency tenfold. Highly recommend!"
            </p>
            <a classname="comment_reply_btn" href="#!">
              Reply
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <hr classname="m-0" />
  <div classname="comment_area mb-0">
    <h3 classname="details_item_info_title mb-1">Leave a Comment</h3>
    <p classname="mb-5">
      Your email address will not be published. Required fields are marked
      <sup classname="text-primary">*</sup>
    </p>
    <div classname="row">
      <div classname="col-md-6">
        <div classname="form-group">
          <label classname="input_title" htmlfor="input_name">
            Full Name
            <sup classname="text-primary">*</sup>
          </label>
          <input
            id="input_name"
            classname="form-control"
            type="text"
            name="name"
            placeholder="Goladra Gomaz"
            required=""
          />
        </div>
      </div>
      <div classname="col-md-6">
        <div classname="form-group">
          <label classname="input_title" htmlfor="input_email">
            Your Email
            <sup classname="text-primary">*</sup>
          </label>
          <input
            id="input_email"
            classname="form-control"
            type="email"
            name="email"
            placeholder="Techco@example.com"
            required=""
          />
        </div>
      </div>
      <div classname="col-12">
        <div classname="form-group">
          <label classname="input_title" htmlfor="input_textarea">
            Comments / Questions
            <sup classname="text-primary">*</sup>
          </label>
          <textarea
            id="input_textarea"
            classname="form-control"
            name="message"
            placeholder="How can we help you?"
            defaultvalue='{""}/'
            defaultValue={
              '                    </div>\n                    <div className="form-check mb-5">\n                      <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>\n                      <label className="form-check-label" htmlFor="flexCheckDefault">\n                        Save my name, email, and website in this browser for the next time I comment.\n                      </label>\n                    </div>\n                    <button type="submit" className="btn btn-primary">\n                      <span className="btn_label" data-text="Submit Comment">\n                        Submit Comment\n                      </span>\n                      <span className="btn_icon">\n                        <i className="fa-solid fa-arrow-up-right"/>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n'
            }
          />
        </div>
      </div>
    </div>
  </div>
</>

    )
}

export default CommentArea;
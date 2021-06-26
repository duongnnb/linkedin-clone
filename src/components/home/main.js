import {
  Container,
  ShareBox,
  Article,
  ShareActor,
  Description,
  SharedImg,
  SocialCounts,
  SocialActions,
} from './styles/main';
import PostModal from './post-modal';
import { useState } from 'react';

const Main = () => {
  const [showModal, setShowModal] = useState('close');

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case 'open':
        setShowModal('close');
        break;
      case 'close':
        setShowModal('open');
        break;
      default:
        setShowModal('close');
    }
  };
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button onClick={handleClick}>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <ShareActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </ShareActor>

          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/thanos-shared.jpeg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like-icon.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comments-icon.svg" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

export default Main;

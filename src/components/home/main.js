import { Container, ShareBox } from './styles/main';

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
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
    </Container>
  );
};

export default Main;

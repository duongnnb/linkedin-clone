import {
  Container,
  ShareBox,
  Article,
  ShareActor,
  Description,
  SharedImg,
  SocialCounts,
  SocialActions,
  Content,
} from './styles/main';
import PostModal from './post-modal';
import { useState } from 'react';
import { connect } from 'react-redux';
import { getArticlesAPI } from '../../actions';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

const Main = (props) => {
  const [showModal, setShowModal] = useState('close');

  useEffect(() => {
    props.getArticles();
  }, []);

  console.log(props.articles);

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
    <>
      {props.articles?.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button onClick={handleClick} disabled={props.loading ? true : false}>
                Start a post
              </button>
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
          <Content>
            {props.loading && <img src="/images/spin-loader.svg" alt="" />}
            {props.articles?.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <ShareActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" alt="" />
                    </button>
                  </ShareActor>

                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={'100%'} url={article.video} />
                      ) : (
                        article.sharedImg && <img src={article.sharedImg} alt="" />
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img
                          src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                          alt=""
                        />
                        <img
                          src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                          alt=""
                        />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments} comments</a>
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
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

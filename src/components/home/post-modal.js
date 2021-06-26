import { useState } from 'react';
import {
  Container,
  Content,
  Header,
  SharedContent,
  UserInfo,
  ShareCreation,
  AttachAssets,
  AssetButton,
  ShareComment,
  PostButton,
  Editor,
} from './styles/post-modal';

const PostModal = (props) => {
  const [editorText, setEditorText] = useState('');

  const reset = (e) => {
    setEditorText('');
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === 'open' && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e) => reset(e)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <img src="/images/share-image.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/video-image.svg" alt="" />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <img src="/images/share-comment.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>

              <PostButton>post</PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

export default PostModal;

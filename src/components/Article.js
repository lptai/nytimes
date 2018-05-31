import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedDate } from 'react-intl';
import Modal from 'react-modal';
import moment from 'moment';

const Figure = styled.figure.attrs({
  className: 'article-media',
})`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const Link = styled.a.attrs({
  className: 'article-link',
})`
  color: #000;
  text-decoration: none;
  &:visited {
    color: #326891;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const ByLine = styled.div.attrs({
  className: 'by-line',
})`
  font-size: 0.6875rem;
  line-height: 0.75rem;
  font-weight: 500;
  font-style: normal;
  font-family: 'nyt-franklin', arial, helvetica, sans-serif;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 3px;
  color: #999;
`;

const Divider = styled.span.attrs({
  className: 'divider',
})`
  border-radius: 1px;
  background-color: #999;
  width: 2px;
  height: 2px;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  display: inline-block;
  margin: 6px 5px 0;
`;

const Headline = styled.p.attrs({
  className: 'headline',
})`
  margin: 0;
  font-size: 1.4375rem;
  line-height: 1.6875rem;
  font-weight: 700;
  font-style: normal;
  font-family: 'cheltenham-normal-700', georgia, 'times new roman', times, serif;
  font-feature-settings: 'kern';
  clear: left;
`;

const Summary = styled.p.attrs({
  className: 'summary',
})`
  padding-top: 2px;
  flex-grow: 1;
  margin: 0;
`;

const Iframe = styled.iframe`
  border: none;
  height: 90%;
  padding-top: 16px;
`;

const staticUrl = `https://static01.nyt.com/`;
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  onShowArticleDetail = () => {
    this.setState(prevState => ({
      ...prevState,
      showModal: true,
    }));
  };

  onCloseArticleDetail = () => {
    this.setState(prevState => ({
      ...prevState,
      showModal: false,
    }));
  };

  render() {
    const { byline, headline, pub_date, multimedia, snippet, source, web_url } = this.props.article;
    const author = byline ? byline.original : '';

    // get thumbnail data
    let Media = null;
    const thumbnail = multimedia.find(media => media.subtype === 'wide');
    if (thumbnail) {
      const { credit, url, width, height } = thumbnail;
      const imageSrcUrl = staticUrl + url;
      Media = () => (
        <Figure>
          <img src={imageSrcUrl} alt={snippet} width={width} height={height} />
          {credit && <figcaption>{credit}</figcaption>}
        </Figure>
      );
    }

    // story ui
    const publishDate = new Date(pub_date);
    let pubDateUI = <FormattedDate value={publishDate} year="numeric" month="long" day="2-digit" />;

    // if today() display hours instead
    var now = moment(new Date()); //todays date
    if (now.isSame(publishDate, 'day')) {
      var duration = moment.duration(now.diff(publishDate));
      pubDateUI = <span>{Math.round(duration.asHours())}h ago</span>;
    }

    const Story = () => (
      <Flex flexDirection={'column'} p={[2, 3]}>
        <Headline>
          <Link href="#" onClick={this.onShowArticleDetail}>
            {headline.main}
          </Link>
        </Headline>

        <Summary>{snippet}</Summary>
        <ByLine>
          {pubDateUI}
          {author && pubDateUI && <Divider />}
          <span className="author">{author}</span>
        </ByLine>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.onCloseArticleDetail}
          contentLabel="Example Modal">
          <Iframe src={web_url} width="100%">
            <p>Your browser does not support iframes.</p>
          </Iframe>
          <button style={{ float: 'right' }} onClick={this.onCloseArticleDetail}>
            Close
          </button>
        </Modal>
      </Flex>
    );

    return (
      <Flex flexDirection={['column', 'row']}>
        {thumbnail && <Media />}
        <Story />
      </Flex>
    );
  }
}

Article.propTypes = {};

export default Article;

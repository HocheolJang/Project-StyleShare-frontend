import React, { Component } from 'react';
import Card from "./Card";
import './CardList.scss';
class CardList extends Component {
  constructor() {
    super();
    this.state = {
      isModal: '',
      modalData: [],
    }
  }
  
  handleModal = (data) => {
    // console.log(this.state.isModal);
    this.props.isModal({
      isModal: data,
    })
  }

  handleModalData = (data) => {
    console.log(data);
    this.props.modalData({
      modalData: data,
    })
  }

  render() {
    // console.log(this.state.modalData?.ootdDetail);
    const { cardsData, handleClickLike, commentData, getData } = this.props;
    return (
      <div className="cardListWrapper">
        <p className="heading">지금의 트렌드</p>
        <div className="cardList">
          {cardsData.ootd_list?.map(contents => {
            return (
                <Card
                getData={getData}
                commentData={commentData}
                isModal={this.handleModal}
                modalData={this.handleModalData}
                key={contents.id}
                id={contents.id}
                contentImg={contents.contentImg}
                productImg={contents.productImg}
                productName={contents.productName}
                price={contents.price}
                sale={contents.sale}
                authorImg={contents.authorImg}
                author={contents.author}
                date={contents.date}
                tagName={contents.tagName}
                description={contents.description}
                follower={contents.follower}
                commentNum={contents.commentNum}
                share={contents.share}
                // commentAuthorImg={contents.comments.commentAuthorImg}
                // commentAuthor={contents.comments.commentAuthor}
                // comment={contents.comments}
                cardsData={cardsData}
                handleClickLike={handleClickLike}
                />
          )}
          )}
        </div>
      </div>
    );
  }
}

export default CardList;
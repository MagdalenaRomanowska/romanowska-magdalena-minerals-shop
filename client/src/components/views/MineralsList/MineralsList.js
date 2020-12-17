import React from "react";
import PropTypes from "prop-types";
import styles from "./MineralsList.module.scss";
import { Link } from "react-router-dom";

class MineralsList extends React.Component {
  componentDidMount() {
    const { loadMinerals } = this.props;
    loadMinerals();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className={styles.productDescription}>
        <div className={styles.squaresLeftSided}>
          <ul className={styles.squares}>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
          </ul>
        </div>
        <div className={styles.exploreMinerals}>
          Our Products
        </div>
        <div className={styles.allProductsToChoose}>
          <div className={styles.allProducts}>
            {posts.length ? (
              posts.map((post) => (
                <div className={styles.product} key={post.title}>
                  <Link
                    key={post.title}
                    to={`/minerals/${post.title}`}
                    className={styles.photoInside}
                  >
                    <img
                      src={post.photoBracelet}
                      alt={"mineralPhotoBracelet"}
                    />
                  </Link>
                  <div className={styles.mineralText}>
                    <div className={styles.mineralName}>
                      <div className={styles.mineralNameContent}>
                        <b>{post.title} bracelet</b>
                      </div>
                    </div>
                    <div className={styles.mineralPrice}>
                      <div className={styles.mineralPriceTitle}>
                        Minimal price:
                      </div>
                      <div className={styles.mineralPriceContent}>
                        {post.price}
                      </div>
                      <div className={styles.empty}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, no results found.</p>
            )}
          </div>
          <div className={styles.allProducts}>
            {posts.length ? (
              posts.map((post) => (
                <div className={styles.product} key={post.title}>
                  <Link
                    key={post.title}
                    to={`/minerals/${post.title}`}
                    className={styles.photoInside}
                  >
                    <img src={post.photoEarings} alt={"mineralPhotoEarings"} />
                  </Link>
                  <div className={styles.mineralText}>
                    <div className={styles.mineralName}>
                      <div className={styles.mineralNameContent}>
                        <b>{post.title} earings</b>
                      </div>
                    </div>
                    <div className={styles.mineralPrice}>
                      <div className={styles.mineralPriceTitle}>
                        Minimal price:
                      </div>
                      <div className={styles.mineralPriceContent}>
                        {post.price}
                      </div>
                      <div className={styles.empty}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, no results found.</p>
            )}
          </div>
          <div className={styles.allProducts}>
            {posts.length ? (
              posts.map((post) => (
                <div className={styles.product} key={post.title}>
                  <Link
                    key={post.title}
                    to={`/minerals/${post.title}`}
                    className={styles.photoInside}
                  >
                    <img src={post.photoRing} alt={"mineralPhotoRing"} />
                  </Link>
                  <div className={styles.mineralText}>
                    <div className={styles.mineralName}>
                      <div className={styles.mineralNameContent}>
                        <b>{post.title} ring</b>
                      </div>
                    </div>
                    <div className={styles.mineralPrice}>
                      <div className={styles.mineralPriceTitle}>
                        Minimal price:
                      </div>
                      <div className={styles.mineralPriceContent}>
                        {post.price}
                      </div>
                      <div className={styles.empty}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, no results found.</p>
            )}
          </div>
          <div className={styles.allProducts}>
            {posts.length ? (
              posts.map((post) => (
                <div className={styles.product} key={post.title}>
                  <Link
                    key={post.title}
                    to={`/minerals/${post.title}`}
                    className={styles.photoInside}
                  >
                    <img src={post.photoNecklace} alt={"mineralPhotoNecklace"} />
                  </Link>
                  <div className={styles.mineralText}>
                    <div className={styles.mineralName}>
                      <div className={styles.mineralNameContent}>
                        <b>{post.title} necklace</b>
                      </div>
                    </div>
                    <div className={styles.mineralPrice}>
                      <div className={styles.mineralPriceTitle}>
                        Minimal price:
                      </div>
                      <div className={styles.mineralPriceContent}>
                        {post.price}
                      </div>
                      <div className={styles.empty}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, no results found.</p>
            )}
          </div>
        </div>
        <div className={styles.exploreMinerals}>
          Explore Our Minerals Used In Jewelry Production
        </div>
        <div className={styles.allMinerals}>
          {posts.length ? (
            posts.map((post) => (
              <div className={styles.product} key={post.title}>
                <Link
                  key={post.title}
                  to={`/minerals/${post.title}`}
                  className={styles.photoInsideMaterial}
                >
                  <img src={post.photo} alt={"mineralPhoto"} />
                </Link>
                <div className={styles.mineralText}>
                  <div className={styles.mineralName}>
                    <div className={styles.mineralNameContent}>
                      <b>{post.title}</b>
                    </div>
                  </div>
                  <div className={styles.mineralPrice}>
                    <div className={styles.mineralPriceTitle}>&nbsp;</div>
                    <div className={styles.mineralPriceContent}>&nbsp;</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Sorry, no results found.</p>
          )}
        </div>
      </div>
    );
  }
}

MineralsList.propTypes = {
  posts: PropTypes.any,
  title: PropTypes.any,
};

export default MineralsList;

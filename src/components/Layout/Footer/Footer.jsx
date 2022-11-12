import "./Footer.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <section className="footer__top__item">
            <div className="logo-container">
              <span>UITBook</span>
            </div>
            <ul className="contact-info">
              <li className="contact-info__item">Điện thoại: 0987654321</li>
              <li className="contact-info__item">
                Email: ui.book@abc.com
              </li>
              <li className="contact-info__item">
                Địa chỉ: Nhà 123456, Đường Quảng trường sáng tạo, Linh Trung, TP
                Thủ Đức
              </li>
            </ul>
            <div className="social-link--container">
              <a href="https://www.facebook.com/" className="social-link">
                <i
                  className="fa-brands fa-facebook-f"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="https://www.instagram.com/" className="social-link">
                <i
                  className="fa-brands fa-instagram"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="https://www.youtube.com/" className="social-link">
                <i
                  className="fa-brands fa-youtube"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </div>
          </section>
          <section className="footer__top__item about-us">
            <h3 className="footer__top__item__title">Về chúng tôi</h3>
            <ul>
              <li>
                <Link to="about">Giới thiệu</Link>
              </li>
              <li>
                <Link to="about">Thành viên</Link>
              </li>
              <li>
                <Link to="about">Tuyển dụng</Link>
              </li>
            </ul>
          </section>
          <section className="footer__top__item support">
            <h3 className="footer__top__item__title">Hỗ trợ</h3>
            <ul>
              <li>
                <Link to="contact">Liên hệ</Link>
              </li>
              <li>
                <Link to="about">Bảo mật</Link>
              </li>
              <li>
                <Link to="about">Điều khoản</Link>
              </li>
            </ul>
          </section>
          <section className="footer__top__item company">
            <h3 className="footer__top__item__title">
              Công ty cổ phần c ABC
            </h3>
            <ul>
              <li>Mã số thuế: 987654321</li>
              <li>Ngày thành lập: 30/10/2022</li>
              <li>
                Lĩnh vực: .
              </li>
            </ul>
          </section>
        </div>
        <div className="footer__bottom">
          <p>
            © 2022 - 2023 English partner - All rights reserved. Designed by ABC
          </p>  
        </div>
      </Container>
    </footer>
  );
}
export default Footer;

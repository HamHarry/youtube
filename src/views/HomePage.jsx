import { useState } from "react";
import "../css/HomePage.css";
const HomePage = () => {
  const [uxui, setUxui] = useState(true);

  const renderNav = () => {
    return (
      <div className="Nav">
        <div className="Nav-menu">
          <button className="Btn-menu">
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                setUxui(!uxui);
              }}
            ></i>
          </button>
          <img
            src="/src/image/YouTube_Premium_logo.svg.png"
            alt="logo"
            className="Premium"
          />
        </div>
        <div className="Nav-Search">
          <div className="Search">
            <input type="text" placeholder="ค้นหา" className="Input-Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <button className="Btn-microphone">
            <i className="fa-solid fa-microphone"></i>
          </button>
        </div>
        <div className="Profile">
          <button className="Btn-plus">
            <i className="fa-regular fa-square-plus"></i>
          </button>
          <button className="Btn-fa-bell">
            <i className="fa-regular fa-bell"></i>
          </button>
          <img
            src="/src/image/LOGO.jpg"
            alt="profile"
            className="Img-Profile"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderNav()}
      <div className="Container">
        <div className="Choise-Container">
          {uxui && (
            <div className="Choise">
              <div className="Choise-Home">
                <button>
                  <i className="fa-solid fa-house"></i>
                  <p>หน้าแรก</p>
                </button>
                <button>
                  <i className="fa-brands fa-vimeo-v"></i>
                  <p>Shorts</p>
                </button>
                <button>
                  <i className="fa-solid fa-photo-film"></i>
                  <p>การติดตาม</p>
                </button>
                <button>
                  <i className="fa-regular fa-circle-play"></i>
                  <p>YouTube Music</p>
                </button>
              </div>
              <br />
              <hr />
              <br />
              <div className="Choise-Me">
                <button className="Is-Me">
                  <p>คุณ</p>
                  <i className="fa-solid fa-angle-right"></i>
                </button>
                <button>
                  <i className="fa-regular fa-address-book"></i>
                  <p>ช่องของคุณ</p>
                </button>
                <button>
                  <i className="fa-solid fa-rotate-left"></i>
                  <p>ประวัติการเข้าชม</p>
                </button>
                <button>
                  <i className="fa-solid fa-list-ul"></i>
                  <p>เพลย์ลิสต์</p>
                </button>
                <button>
                  <i className="fa-regular fa-thumbs-up"></i>
                  <p>วิดิโอที่ชอบ</p>
                </button>
                <button>
                  <i className="fa-solid fa-download"></i>
                  <p>การดาวน์โหลด</p>
                </button>
              </div>
              <br />
              <hr />
              <br />
              <div className="Choise-Follow">
                <p>การติดตาม</p>
                <button>
                  <img className="IMGLOGO" src="/src/image/HRK.jpg" alt="HRK" />
                  <p>HEARTROCKER</p>
                </button>
                <button>
                  <img
                    className="IMGLOGO"
                    src="/src/image/OHANA.jpg"
                    alt="OHANA"
                  />
                  <p>Ohana clip</p>
                </button>
                <button>
                  <img
                    className="IMGLOGO"
                    src="/src/image/RUBSHRB.jpg"
                    alt="RUBSHRB"
                  />
                  <p>RUBSHRB</p>
                </button>
                <button>
                  <img
                    className="IMGLOGO"
                    src="/src/image/VRZO.jpg"
                    alt="VRZO"
                  />
                  <p>VRZO</p>
                </button>
                <button>
                  <img
                    className="IMGLOGO"
                    src="/src/image/กายหงิด.png"
                    alt="กายหงิด"
                  />
                  <p>กายหงิด</p>
                </button>
                <button>
                  <img
                    className="IMGLOGO"
                    src="/src/image/ยกกำลัง.png"
                    alt="ยกกำลัง"
                  />
                  <p>ยกกำลัง</p>
                </button>
                <button>
                  <img
                    className="IMGLOGO"
                    src="/src/image/เทพลีลา.jpg"
                    alt="เทพลีลา"
                  />
                  <p>เทพลีลา</p>
                </button>
                <button>
                  <img
                    className="IMGLOGO"
                    src="/src/image/Talon.png"
                    alt="TALON"
                  />
                  <p>TALON Valorant</p>
                </button>
              </div>
              <br />
              <hr />
              <br />
              <div className="Choise-Footer">
                <p>
                  เกี่ยวกับ สื่อลิขสิทธิ์ ติดต่อเรา <br />
                  ครีเอเตอร์โฆษณา <br />
                  นักพัฒนาซอฟต์แวร์
                  <br />
                  <br />
                  ข้อกำหนด ความเป็นส่วนตัวนโยบายและความปลอดภัยวิธีการทำงานของ
                  YouTubeทดลองใช้ฟีเจอร์ใหม่
                </p>
                <br />
                <p>© 2024 Google LLC</p>
              </div>
            </div>
          )}
          {!uxui && (
            <div className="Choise-UX">
              <div className="Choise-Home-UX">
                <button>
                  <i className="fa-solid fa-house"></i>
                  <p>หน้าแรก</p>
                </button>
                <button>
                  <i className="fa-brands fa-vimeo-v"></i>
                  <p>Shorts</p>
                </button>
                <button>
                  <i className="fa-solid fa-photo-film"></i>
                  <p>การติดตาม</p>
                </button>
                <button>
                  <i className="fa-regular fa-circle-play"></i>
                  <p>YouTube Music</p>
                </button>
                <button>
                  <i className="fa-regular fa-address-book"></i>
                  <p>ช่องของคุณ</p>
                </button>
                <button>
                  <i className="fa-solid fa-download"></i>
                  <p>การดาวน์โหลด</p>
                </button>
              </div>
            </div>
          )}
          <div className="Card">
            <div className="List-Choise">
              <button>ทั้งหมด</button>
              <button>เกม</button>
              <button>เพลง</button>
              <button>การ์ตูน</button>
              <button>รายการตลก</button>
            </div>
            <div className="List">
              <div className="List-Card">
                <div className="List-Warp-Card">
                  <img
                    src="/src/image/listplayTalon.png"
                    alt="talon"
                    className="IMG-Warp-Card"
                  />
                  <div className="List-Text">
                    <img
                      src="/src/image/Talon.png"
                      alt="talon"
                      className="IMG-Text"
                    />
                    <div className="Text">
                      <h2>ถ้าเจอหมด ก็เล่นได้หมด | Flight Club 5</h2>
                      <p>TALON Valorant</p>
                      <div className="Text-Watching">
                        <p>การดู 5.3 พัน ครั้ง</p>
                        <li>1 ชั่วโมงที่ผ่านมา</li>
                      </div>
                    </div>
                    <button>
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import { useState } from "react";
import "../css/HomePage.css";
import "../css/ChoiseHomPage.css";
import mockupfollow from "../MockUpFollow";
import mockuplistcard from "../MockUpListCard";
const HomePage = () => {
  const [uxui, setUxui] = useState(true);
  const [dataFollow] = useState(mockupfollow);
  const [dataListCard, setDataListCard] = useState(mockuplistcard);
  const [dataListCardRef] = useState(dataListCard);
  const [selectedType, setSelectedType] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState("home");
  // Navbar ----------------------------------------------------------------
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
            onClick={() => {
              return window.location.reload(false);
            }}
          />
        </div>
        <div className="Nav-Search">
          <div className="Search">
            <input
              type="text"
              placeholder="ค้นหา"
              className="Input-Search"
              onChange={handleChange}
            />
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
  // Card ----------------------------------------------------------------
  const renderCard = () => {
    return (
      <div className="Card">
        <div className="List">
          <div className="List-Card">
            {dataListCard.map((item, index) => {
              return (
                <div key={index} className="List-Warp-Card">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="IMG-Warp-Card"
                  />
                  <div className="List-Text">
                    <img src={item.logo} alt={item.name} className="IMG-Text" />
                    <div className="Text">
                      <h2>{item.caption}</h2>
                      <p>{item.name}</p>
                      <div className="Text-Watching">
                        <p>{item.watch}</p>
                        <li>{item.time}</li>
                      </div>
                    </div>
                    <div className="btn-list-dropdown">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  // Choise = ture ----------------------------------------------------------------
  const renderChoiseHome = () => {
    return (
      <div className="Choise-Home">
        <div
          className={tab === "home" ? "is-btn-home" : "btn-home"}
          onClick={() => {
            window.location.reload(false);
            setTab("home");
          }}
        >
          <i className="fa-solid fa-house"></i>
          <p>หน้าแรก</p>
        </div>
        <div className="btn-home">
          <i className="fa-brands fa-vimeo-v"></i>
          <p>Shorts</p>
        </div>
        <div className="btn-home">
          <i className="fa-solid fa-photo-film"></i>
          <p>การติดตาม</p>
        </div>
        <div className="btn-home">
          <i className="fa-regular fa-circle-play"></i>
          <p>YouTube Music</p>
        </div>
        <br />
      </div>
    );
  };
  const renderChoiseMe = () => {
    return (
      <div className="Choise-Me">
        <br />
        <div className="Is-Me">
          <p>คุณ</p>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="btn-me">
          <i className="fa-regular fa-address-book"></i>
          <p>ช่องของคุณ</p>
        </div>
        <div className="btn-me">
          <i className="fa-solid fa-rotate-left"></i>
          <p>ประวัติการเข้าชม</p>
        </div>
        <div className="btn-me">
          <i className="fa-solid fa-list-ul"></i>
          <p>เพลย์ลิสต์</p>
        </div>
        <div className="btn-me">
          <i className="fa-regular fa-thumbs-up"></i>
          <p>วิดิโอที่ชอบ</p>
        </div>
        <div className="btn-me">
          <i className="fa-solid fa-download"></i>
          <p>การดาวน์โหลด</p>
        </div>
        <br />
      </div>
    );
  };
  const renderChoiseFollow = () => {
    return (
      <div className="Choise-Follow">
        <br />
        <p>การติดตาม</p>
        {dataFollow.map((item, index) => {
          return (
            <div key={index} className="btn-listfollow">
              <img className="IMGLOGO" src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
        <br />
      </div>
    );
  };
  const renderChoiseFooter = () => {
    return (
      <div className="Choise-Footer">
        <br />
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
        <br />
      </div>
    );
  };
  // Choise = false ----------------------------------------------------------------
  const renderChoiseUX = () => {
    return (
      <div className="Choise-UX">
        <div className="Choise-Home-UX">
          <div
            className="btn-choise-ux"
            onClick={() => {
              return window.location.reload(false);
            }}
          >
            <i className="fa-solid fa-house"></i>
            <p>หน้าแรก</p>
          </div>
          <div className="btn-choise-ux">
            <i className="fa-brands fa-vimeo-v"></i>
            <p>Shorts</p>
          </div>
          <div className="btn-choise-ux">
            <i className="fa-solid fa-photo-film"></i>
            <p>การติดตาม</p>
          </div>
          <div className="btn-choise-ux">
            <i className="fa-regular fa-circle-play"></i>
            <p>YouTube Music</p>
          </div>
          <div className="btn-choise-ux">
            <i className="fa-regular fa-address-book"></i>
            <p>ช่องของคุณ</p>
          </div>
          <div className="btn-choise-ux">
            <i className="fa-solid fa-download"></i>
            <p>การดาวน์โหลด</p>
          </div>
        </div>
      </div>
    );
  };
  // ListChoice ----------------------------------------------------------------
  const renderListChoice = () => {
    return (
      <div className={`List-Choise ${uxui && "List-Choise-Ux"}`}>
        <div className="List-Warp-Choise">
          <div
            className={selectedType === "all" ? "Isselect" : "btn-list-choise"}
            onClick={() => {
              const newdata = dataListCardRef.filter((item) => {
                const searchcaption = String(item.caption)
                  .toLowerCase()
                  .includes(searchValue);
                const searchname = String(item.name)
                  .toLowerCase()
                  .includes(searchValue);
                return searchcaption || searchname;
              });
              setDataListCard(newdata);
              setSelectedType("all");
            }}
          >
            ทั้งหมด
          </div>
          <div
            className={selectedType === "game" ? "Isselect" : "btn-list-choise"}
            onClick={() => {
              const newdata = dataListCardRef.filter((item) => {
                const searchcaption = String(item.caption)
                  .toLowerCase()
                  .includes(searchValue);
                const searchname = String(item.name)
                  .toLowerCase()
                  .includes(searchValue);
                return item.type === "game" && (searchcaption || searchname);
              });
              setDataListCard(newdata);
              setSelectedType("game");
              console.log(newdata);
            }}
          >
            เกม
          </div>
          <div
            className={
              selectedType === "music" ? "Isselect" : "btn-list-choise"
            }
            onClick={() => {
              const newdata = dataListCardRef.filter((item) => {
                const searchcaption = String(item.caption)
                  .toLowerCase()
                  .includes(searchValue);
                const searchname = String(item.name)
                  .toLowerCase()
                  .includes(searchValue);
                return item.type === "music" && (searchcaption || searchname);
              });
              setDataListCard(newdata);
              setSelectedType("music");
            }}
          >
            เพลง
          </div>
          <div
            className={
              selectedType === "comedy" ? "Isselect" : "btn-list-choise"
            }
            onClick={() => {
              const newdata = dataListCardRef.filter((item) => {
                const searchcaption = String(item.caption)
                  .toLowerCase()
                  .includes(searchValue);
                const searchname = String(item.name)
                  .toLowerCase()
                  .includes(searchValue);
                return item.type === "comedy" && (searchcaption || searchname);
              });
              setDataListCard(newdata);
              setSelectedType("comedy");
            }}
          >
            รายการตลก
          </div>
        </div>
      </div>
    );
  };
  // Search ----------------------------------------------------------------
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    const newdata = dataListCardRef.filter((item) => {
      const searchcaption = String(item.caption).toLowerCase().includes(value);
      const searchname = String(item.name).toLowerCase().includes(value);
      return (
        (searchcaption || searchname) &&
        (item.type === selectedType || selectedType === "all")
      );
    });
    setDataListCard(newdata);
    setSearchValue(value);
  };

  return (
    <div>
      {renderNav()}
      <div className="Container">
        <div className="Choise-Container">
          {uxui ? (
            <div className="Choise">
              {renderChoiseHome()}
              <hr />
              {renderChoiseMe()}
              <hr />
              {renderChoiseFollow()}
              <hr />
              {renderChoiseFooter()}
            </div>
          ) : (
            renderChoiseUX()
          )}
          {renderListChoice()}
          {renderCard()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

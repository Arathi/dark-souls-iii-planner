import { Outlet, useNavigate } from "react-router";
import { useSnapshot } from "valtio";
import type { Language } from "@/domains/language";
import { settingStore } from "@/store";
import "./index.scss";

const Root = () => {
  const navigate = useNavigate();
  const setting = useSnapshot(settingStore);

  return (
    <div className="root">
      <div className="header">
        <div className="navigator">
          <div
            className="link"
            onClick={() => {
              navigate("/dark-souls");
            }}
          >
            Dark Souls Remastered
          </div>
          <div
            className="link"
            onClick={() => {
              navigate("/dark-souls-iii");
            }}
          >
            Dark Souls III
          </div>
        </div>
        <div>
          <select
            value={setting.language}
            onChange={(event) => {
              const value = event.currentTarget.value;
              settingStore.language = value as Language;
            }}
          >
            <option value="english">English</option>
            <option value="chinese">简体中文</option>
            <option value="japanese">日本語</option>
          </select>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

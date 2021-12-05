import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./desktop.scss";
import HomePage from "./HomePage/HomePage";
import DriftPage from "./DriftPage/DriftPage";
import TimeAttackPage from "./TimeAttackPage/TimeAttackPage";
import ForzaPage from "./ForzaPage/ForzaPage";

function Menu() {
  return (
    <div className="Menu-row">
      <nav className="menu">
        <NavLink className="menu__item" to="/">
          Главная
        </NavLink>
        <NavLink className="menu__item" to="/drift">
          Дрифт-такси
        </NavLink>
        <NavLink className="menu__item" to="/timeattack">
          Time Attack
        </NavLink>
        <NavLink className="menu__item" to="/forza">
          Forza Karting
        </NavLink>
      </nav>
      <div className="menu">
        <Routes>
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Menu;

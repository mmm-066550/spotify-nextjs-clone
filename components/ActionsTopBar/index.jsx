import React from "react";
import styles from "./.module.sass";
import NavBtns from "../NavBtns";
import SearchInput from "../SearchInput";
import UserActions from "../UserActions";

export default function () {
  return (
    <header className={styles.actions_top_bar}>
      <div className={styles.container}>
        <div className="row align-items-center g-0">
          <div className="col-8">
            <div className="d-lg-flex d-none align-items-center">
              <NavBtns />
              {/* <SearchInput /> */}
            </div>
          </div>
          <div className="col-4">
            <UserActions />
          </div>
        </div>
      </div>
    </header>
  );
}

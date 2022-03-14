import React from "react";
import styles from "./.module.sass";
import SearchIcon from "../../public/assets/icons/searchIcon";

export default function SearchInput() {
  return (
    <div className={styles.search_form_container}>
      <SearchIcon />
      <form>
        <input
          type="text"
          name="q"
          id="q"
          placeholder="Artists, songs or podcasts"
        />
      </form>
    </div>
  );
}

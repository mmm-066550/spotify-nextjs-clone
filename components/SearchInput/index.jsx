import React from "react";
import styles from "./.module.sass";
import SearchIcon from "../../public/assets/icons/searchIcon";
import { useRouter } from "next/router";

export default function SearchInput() {
  const router = useRouter();
  if (router.pathname.startsWith("/search"))
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
  return <></>;
}

import React, { useState, useEffect} from 'react';
import Search from './containers/Search';
import Results from './containers/Results';
import ViewItem from './containers/ViewItem';
import api from './services/api';

import styles from './App.module.scss';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  const handleClose = () => setSelectedItem(null);
  const handleSuccessLoad = (products) => {
    setItemsList(products);
    setLoading(false);
  };

  const loadItems = () => {
    setLoading(true);
    api.searchProducts({ name: inputText })
      .then(handleSuccessLoad)
      .catch(() => {});
  };

  useEffect(loadItems, [inputText]);

  return (
    <div className={styles.App}>
      <Search onInput={setInputText} inputText={inputText} />
      <Results selectItem={setSelectedItem} loading={loading} itemsList={itemsList} />
      {
        selectedItem && (
          <ViewItem item={selectedItem} onClose={handleClose} />
        )
      }
    </div>
  );
};

export default App;

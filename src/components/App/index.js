import React from 'react';
import { Route, Link } from 'react-router-dom'
import { AppBar } from 'material-ui';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Search from '../Search'
import Office from '../Office'
import Register from '../Register'
import SearchIcon from 'material-ui-icons/Search'
import ContentPasteIcon from 'material-ui-icons/ContentPaste'
import StoreMallDirectoryIcon from 'material-ui-icons/StoreMallDirectory'

import styles from './styles.css'

const App = () => (
  <div>
    <AppBar>
      <h1>Post Tracking Service</h1>
    </AppBar>
    <main className={styles.main}>
      <Route exact path="/search/item" component={Search} />
      <Route exact path="/search/office" component={Office} />
      <Route exact path="/register" component={Register} />
      <BottomNavigation value={false}>
        <BottomNavigationButton
          icon={<SearchIcon/>}
          label={<Link to="/search/item">Search Parcel</Link>}
        />
        <BottomNavigationButton
          icon={<ContentPasteIcon/>}
          label={<Link to="/search/office">Search Post Office</Link>}
        />
        <BottomNavigationButton
          icon={<StoreMallDirectoryIcon/>}
          label={<Link to="/register">Register</Link>}
        />
      </BottomNavigation>
    </main>
  </div>
)

export default App

import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Jobs from './components/Jobs';
import * as data from './data.json'

function App() {
  const [jobs, setJobs] = useState(data.default);
  
  return (
    <Container>
      <Header> 
        <Logo>
          <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" alt="logo"/>
          <h1>CleverJobs</h1>
        </Logo>
      </Header>
      <MainContainer> 
        <Main>
          <SearchContainer>
            <CustomSearch />
            <input type="text" placeholder="Filter by title"/>
            <Button>
              Find Job
            </Button>
          </SearchContainer>
          <DisplayBar>
            <h1>Showing 15 Jobs</h1>
          </DisplayBar>
          <Jobs jobsData={jobs} />
        </Main>
      </MainContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  background-color: #11121a;
`
const Header = styled.div`
  width: 100%; 
  height: 70px;
  background-color: #1c1c24;
  display: flex;
  justify-content: center;

`

const Logo = styled.div`
  background-color: #1c1c24;
  display: flex; 
  align-items: center;
  max-width: 1250px;
  width: 100%;
  padding: 0px 20px;
  gap: 10px;

  img {
    height: 50px;
  }

  h1 {
    font-size: 20px;
    color: white;
  }
`

const MainContainer = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: center;
`
const Main = styled.div`
  max-width: 1250px;
  width: 100%;
  padding: 0px 20px;
`

const SearchContainer = styled.div`
  background-color: #1c1c24;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #222328;
  overflow: hidden;
  margin: 20px 0px; 

  input {
    flex-grow: 1; 
    background-color: #1c1c24;
    color: white;
    outline: none;
    border: none;
    font-size: 20px;
    margin-left: 20px;
  }

`

const Button = styled.div`
  background-color: #3060ff;
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #5C82FF;
  }
`

const CustomSearch = styled(SearchIcon)`
  margin-left: 25px;
  color: white;
`

const DisplayBar = styled.div`
  width: 100%;
  color: white;
  font-size: 8px;
  margin-left: 25px;
  margin-bottom: 20px;
`
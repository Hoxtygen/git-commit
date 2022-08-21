import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import CommitItem from "./components/CommitItem";
import Header from "./components/Header";
import Input from "./components/Input";
import { useFetchCommits } from "./hooks/useFetchCommits";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [accessKey, setAccessKey] = useLocalStorage("accessKey", "");
  const [countDownTimer, setCountDownTimer] = useState<number | undefined>(30);

  const { fetchCommits, commits, error, loading } = useFetchCommits();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccessKey(event.target.value.trim());
  };

  const handleFetchCommits = () => {
    fetchCommits(accessKey);
  };

  useEffect(() => {
    fetchCommits(accessKey);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDownTimer((prevState = 0) => {
        if (prevState === 0) {
          fetchCommits(accessKey);
          setCountDownTimer(30);
        } else {
          return prevState - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [accessKey, fetchCommits]);

 


  return (
    <div className="App">
      <Header>
        <h2 className="title">Commit History</h2>
        <div className="text-box-wrapper">
          <Input value={accessKey} handleChange={handleChange} />
          <div>
            <Button
              title="Send"
              className="btn btn-fetch-commits"
              handleClick={handleFetchCommits}
              data-testid="fetch-btn"
              aria-labelledby="fetch data button"
            />
          </div>
        </div>
        <div className="refresh-wrapper">
          <Button
            title="Refresh"
            className="btn btn-refresh"
            handleClick={handleFetchCommits}
            data-testid="refresh-btn"
            aria-labelledby="refresh data button"
          />
          <p className="refresh-countdown">
            {countDownTimer} seconds to page refresh
          </p>
        </div>
        <div className="dynamic-text">
          {loading && <p>Fetching data....</p>}
          {error && (
            <p data-testid="error-text" className="error">
              {error.message}
            </p>
          )}
        </div>
      </Header>
      <main className="main">
        <div className="commit-list">
          {commits.map((commit: any) => (
            <CommitItem
              key={commit.node_id}
              message={commit.commit.message}
              date={commit.commit.author.date}
              author={commit.author.login}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import Axios from "axios";
import RepoCard from "../components/RepoCard";
import { Grid } from "@material-ui/core";
import { USER_NAME } from "../api/GitHub";
import { Header } from '../components';
class GitHubCards extends Component {
  Title = [];
  state = {
    repo: [],
    language: [],
  };
  
  async componentDidMount() {
    console.log(this.props)
    let repos = await Axios.get(
      `https://api.github.com/users/${this.props.username}/repos`,
    );

    let lang = {};

    //Cached language data
    if (localStorage.getItem("lang")) {
      lang.data = JSON.parse(localStorage.getItem("lang"));
    } else {
      lang = await Axios.get("https://github-lang-deploy.herokuapp.com/");
      localStorage.setItem("lang", JSON.stringify(lang.data));
    }

    this.setState({
      repo: repos.data,
      language: lang.data,
    });
  }

  comapare(a, b) {
    if (a.stargazers_count > b.stargazers_count) return -1;
    else if (a.stargazers_count < b.stargazers_count) return 1;
    else if ((a.stargazers_count = b.stargazers_count)) {
      if (a.forks_count > b.forks_count) return -1;
      else if (a.forks_count < b.forks_count) return 1;
      else return 0;
    }
  }

  render() {
    const { repo, language } = this.state;
    const filtered = repo.sort(this.comapare);
    const reducedrepo = filtered.slice(0, 8);

    return (
      <div>
        <Header />
        <Grid container spacing={1}>
          {reducedrepo.map((data, i) => (
            <RepoCard repo={data} key={i} language={language} />
          ))}
        </Grid>
      </div>
    );
  }
}
export default GitHubCards;

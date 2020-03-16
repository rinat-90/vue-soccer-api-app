const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = process.env.VUE_APP_API_KEY;
const BASE_URL = `${proxy}http://api.football-data.org/v2`;
const LEAGUE_ID = 2021;
const COMP = 'competitions';



function fetchAPI(url) {
  return fetch(url, { headers: { 'X-Auth-Token': API_KEY, mode: 'no-cors' }, dataType: 'json' })
    .then(response => response.json())
    .catch(error => { throw error })
}

//FETCH ALL TEAMS
function getTeams() {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }/teams`)
}

//FETCH TEAM BY ID  
function getTeam(id) {
  return fetchAPI(`${ BASE_URL }/teams/${ id }`)
}

//FETCH STANDINGS TABLE
function getTable() {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }/standings?standingType=TOTAL`)
}

//TOP 5 SCORERS
function getScorers(limit) {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }/scorers?limit=${ limit }`)
}

//GET ALL MATCHES
function getAllMatches() {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }/matches`)
}

//FETCH  MATCHES BY MATCHDAY
function getMatches(num) {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }/matches?matchday=${ num }`)
}


//FETCH MATCHES FOR SPECIFIC TEAM
function getTeamMatches(id, status, limit = 1) {
  return fetchAPI(`${ BASE_URL }/teams/${ id }/matches?status=${ status }&limit=${ limit }`)
}

//FETCH LEAGUE INFO
function getCurrentSeason() {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }`)
}

export default {
  getTeams,
  getTeam,
  getTable,
  getScorers,
  getAllMatches,
  getMatches,
  getTeamMatches,
  getCurrentSeason
};

const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '7b970565e3de48238e2e5b10ca7c60b2';
const BASE_URL = `${proxy}http://api.football-data.org/v2`;
const LEAGUE_ID = 2021;
const COMP = 'competitions';


function fetchAPI(url) {
  return fetch(url, { headers: { 'X-Auth-Token': API_KEY }, dataType: 'json' })
    .then(response => response.json())
}

//FETCH ALL TEAMS
function getTeams() {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }/teams`)
}

//FETCH SPECIFIC TEAM
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

//FETCH CURRENT MATCHDAY
function getCurrentMatchday() {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }`)
}

//FETCH CURRENT MATCHES
function getMatches(num) {
  return fetchAPI(`${ BASE_URL }/${ COMP }/${ LEAGUE_ID }/matches?matchday=${ num }`)
}

//FETCH MATCHES FOR SPECIFIC TEAM
function getTeamMatches(id, status, limit) {
  return fetchAPI(`${ BASE_URL }/teams/${ id }/matches?status=${ status }&limit=${ limit }`)
}

export default {
  getTeams,
  getTeam,
  getTable,
  getScorers,
  getAllMatches,
  getCurrentMatchday,
  getMatches,
  getTeamMatches
};

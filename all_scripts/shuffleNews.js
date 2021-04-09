
const shuffleArticles = (stockUserObject) =>
{
  shuffledArticles = [];

  if(stockUserObject.followed.length > 0)
  {
    for(let i = 0; i < stockUserObject[followed].length; i++)
    {
      shuffleArticles.push(...stockUserObject[stocks][stockUserObject[followed][i]][news]);
    }
    
    shuffledArticles = shuffle(shuffledArticles);
  }
  return shuffledArticles;

}


function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

module.exports = {shuffleArticles}
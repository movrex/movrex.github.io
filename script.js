var listName = 'list.json';
var sug_var =
      '<a class="mov" mov-lang="ENG" mov-year="2020" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EXkJfQunJxNIqJpbmJvIyCUBePmQOs7ZwKZ0vRQcdpZ2DQ?e=JlOv0u&download=1"> <img class="img" src="/img/moimg/90c.jpg" alt="Poster"> <p class="name">Trolls World Tour</p> </a> <a class="mov" mov-lang="ENG" mov-year="2020" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EZ6gLyvNILZNrRRUSSd6gl4BY1xJpqpbmhJItHtwnbeKXg?e=YjP6aF&download=1"> <img class="img" src="/img/moimg/25c.jpg" alt="Poster"> <p class="name">Onward</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EbK7lZL69C1IknEnvL58NtABhS380FTr6WLAO-a74sj4tA?e=OdTIVP&download=1" class="mov" mov-lang="ENG" mov-year="2020"> <img class="img" src="/img/moimg/24c.jpg" alt="Poster"> <p class="name">Sonic the Hedgehog</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EVBeMMi4KsJGqGPFqLDlY1wBVOhmh96_JRjYhjKbq3_Ubg?e=lcKRav&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/23c.jpg" alt="Poster"> <p class="name">Spies in Disguise</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ee2PTYjNY5VIrFr_6KS38WIBw6vFwyb7GCvhxLCuCaG4vg?e=W5SNmG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/22c.jpg" alt="Poster"> <p class="name">Frozen 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETJoqNgbLjFCmTYYWf5NuhcByWFnMvsSCF_08nTvkOp_xA?e=EJyvQG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/1c.jpg" alt="Poster"> <p class="name">How to train your dragon: The Hidden World</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EcaKfVG49FZGgPR32yp-QFsBChs3ZApyJ4hbCDbZiS9rGA?e=DAAmky&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/16c.jpg" alt="Poster"> <p class="name">Abominable</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EWJLv4zt6J5MlE9ZLXXDBCQBrbweTba0_SB5CZwhZdI_Dw?e=gpI9m5&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/13c.jpg" alt="Poster"> <p class="name">The Angry Birds Movie 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETz-GF7aibRPqa0ygCGcQncBKauI5IyXymvBW3UFjthRgQ?e=rRbD48&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/11c.jpg" alt="Poster"> <p class="name">The Lion King</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ea1Cmy1DouJGjAHhxfTu3k0B5RMhTD7EOaq4SaX2-l_tdg?e=o34ego&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/10c.jpg" alt="Poster"> <p class="name">Toy Story 4</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Eemx_8Xfs_hGqNZbEyDGzEYBCX1tC8Zq5c0tTl_C--GJjA?e=Gyl18L&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/9c.jpg" alt="Poster"> <p class="name">The Secret Life of Pets 2</p> </a';



function search_now() {
      window.scrollTo(0, 0);
      if (document.querySelector('#search').value == '') {
            document.querySelector('.close').style.display = 'none';
      } else {
            document.querySelector('.close').style.display = 'block';
      }
}

function txtclear() {
      document.querySelector('#search').value = '';
      document.getElementById("search").focus();
}

function movclick(uname) {
      var tid = uname.split('moimg/')[1].split('.jpg')[0];

      var turl = document.querySelector('#t' + tid).getAttribute('downurl');
      var ttrail = document.querySelector('#t' + tid).getAttribute('trailer');
      var timdb = document.querySelector('#t' + tid).getAttribute('imdb');

      document.querySelector('.pop-down').setAttribute('href', turl);
      document.querySelector('.pop-watch').setAttribute('href', 'https://mostream.github.io/?s=~' +
            turl);
      document.querySelector('.pop-trailer').setAttribute('href', ttrail);
      document.querySelector('.pop-info').setAttribute('href', timdb);

      document.querySelector('.pop-box').style.display = 'grid';
      document.querySelector('.pop-blank').style.display = 'block';

}

function popclose() {
      document.querySelector('.pop-box').style.display = 'none';
      document.querySelector('.pop-blank').style.display = 'none';
}


function home_switch() {
      document.querySelector('.home-bar').setAttribute('src', 'img/homew.svg');
      document.querySelector('.find-bar').setAttribute('src', 'img/search.svg');
      document.querySelector('.panda-bar').setAttribute('src', 'img/panda.svg');
      document.querySelector('.about-sec').style.display = 'none';
      document.querySelector('.discover-sec').style.display = 'block';
      document.querySelector('.search-sec').style.display = 'none';
}

function find_switch() {
      document.querySelector('.home-bar').setAttribute('src', 'img/home.svg');
      document.querySelector('.find-bar').setAttribute('src', 'img/searchw.svg');
      document.querySelector('.panda-bar').setAttribute('src', 'img/panda.svg');
      document.querySelector('.about-sec').style.display = 'none';
      document.querySelector('.discover-sec').style.display = 'none';
      document.querySelector('.search-sec').style.display = 'block';
      document.getElementById("search").focus();
}

function panda_switch() {
      document.querySelector('.home-bar').setAttribute('src', 'img/home.svg');
      document.querySelector('.find-bar').setAttribute('src', 'img/search.svg');
      document.querySelector('.panda-bar').setAttribute('src', 'img/pandaw.svg');
      document.querySelector('.about-sec').style.display = 'block';
      document.querySelector('.discover-sec').style.display = 'none';
      document.querySelector('.search-sec').style.display = 'none';
}

//
//
//
//
//
//
//
//
//
//


$(document).ready(function () {
      $('#search').keyup(function () {
            var searchValue = $('#search').val().trim();
            if (searchValue != '') {
                  $.getJSON(listName, function (result) {
                        var list = result.list;
                        var options = {
                              shouldSort: !0,
                              threshold: 0.6,
                              location: 0,
                              distance: 100,
                              minMatchCharLength: 1,
                              isCaseSensitive: !1,
                              keys: [{
                                          name: 'name',
                                          weight: 0.7
                                    },
                                    {
                                          name: 'year',
                                          weight: 0.3
                                    }
                              ]
                        };
                        var fuse = new Fuse(list, options);
                        var searchResult = fuse.search(searchValue);
                        if (searchResult.length > 0) {
                              $('#movc').empty();
                              $('#movt').empty();
                              $('#movt').append('Search Results');
                              for (i = 0; i < searchResult.length; i++) {
                                    $('#movc').append(
                                          "<a class='mov' mov-year=" +
                                          searchResult[i].lang +
                                          ' id="t' + searchResult[i].img.split('moimg/')[1].split('.jpg')[0] + '" mov-lang=' +
                                          searchResult[i].year +
                                          ' onclick="movclick(' + searchResult[i].img + ')" downurl="' +
                                          searchResult[i].play +
                                          '" trailer="' + searchResult[i].trailer + '" imdb="' + searchResult[i].imdb + '" ><img class="img" src=' +
                                          searchResult[i].img +
                                          "alt='Movie Poster'><p class='name'>" +
                                          searchResult[i].name +
                                          '</p></a>'
                                    );
                              }
                        } else {
                              $('#movc').empty();
                              $('#movt').empty();
                              $('#movt').append('No Results Found');
                        }
                  });
            } else {
                  $('#movc').empty();
                  $('#movt').empty();
                  $('#movt').append('Suggestions');
                  $('#movc').append(sug_var);
            }
      });
});
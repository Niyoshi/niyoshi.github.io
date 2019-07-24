// sizes: 0, 1, 2 = small, medium, large
// types 0-4 = residential, industrial, etc

var images = [
  {
    name: 'building1',
    page: 'projectpage.html',
    path: 'https://cdn.glitch.com/deb5391d-0508-4475-a0f6-2a78360eb742%2Fimperia2.png?v=1562460130180',
    size: 0,
    type: 0,
  },
  {
    name: 'building2',
    page: 'projectpage.html',
    path: 'https://cdn.glitch.com/deb5391d-0508-4475-a0f6-2a78360eb742%2Fpnb.png?v=1562460133254',
    size: 1,
    type: 1,
  },
  {
    name: 'building3',
    page: 'projectpage.html',
    path: 'https://cdn.glitch.com/deb5391d-0508-4475-a0f6-2a78360eb742%2Fimperia3.png?v=1562460129186',
    size: 2,
    type: 2,
  },
  {
    name: 'building4',
    page: 'projectpage.html',
    path: 'https://cdn.glitch.com/deb5391d-0508-4475-a0f6-2a78360eb742%2Fimperia2.png?v=1562460130180',
    size: 0,
    type: 3,
  },
  {
    name: 'building5',
    page: 'projectpage.html',
    path: 'https://cdn.glitch.com/deb5391d-0508-4475-a0f6-2a78360eb742%2FPicture1.png?v=1562460132745',
    size: 2,
    type: 4,
  },
  {
    name: 'building6',
    page: 'projectpage.html',
    path: 'https://cdn.glitch.com/deb5391d-0508-4475-a0f6-2a78360eb742%2Fimperia2.png?v=1562460130180',
    size: 1,
    type: 1,
  }
]



var active = images, //contains all active images, initially all images
  size_clicked = [false, false, false],
  type_clicked = [false, false, false, false, false],
  curSize = -1,
  curType = -1;


$('.sizeToggle').click(function(event){
  if ($(this).hasClass('activeFilter')) {
    $(this).removeClass('activeFilter');
    size_clicked[curSize] = false;
    curSize = -1;
  } else {
    $('.sizeToggle.activeFilter').removeClass('activeFilter');
    if (curSize > -1) size_clicked[curSize] = false;
    curSize = $(this).data('index');
    size_clicked[curSize] = true;
    $(this).addClass('activeFilter');
  }

  sortBySizeAndType();
});

$('.typeToggle').click(function() {
  if ($(this).hasClass('activeFilter')) {
    $(this).removeClass('activeFilter');
    type_clicked[curType] = false;
    curType = -1;
  } else {  
    $('.typeToggle.activeFilter').removeClass('activeFilter');
    if (curType > -1) type_clicked[curType] = false;
    curType = $(this).data('index');
    type_clicked[curType] = true;
    $(this).addClass('activeFilter');
  }

  sortBySizeAndType();
});

var sortBySizeAndType = function() {
  var result = [],
      columns = $('.project-photos .column');
  
  for (var i in images) {
    var img = images[i];
    
    if ((curSize == -1 || img.size == curSize) && (curType == -1 || img.type == curType)) result.push(img);
  }

  columns.empty();
  
  for (var i in result) {
    var img = result[i],
        outerTag = $('<a></a>'),
        innerTag = $('<img></img>');
    
    outerTag.attr('href', img.page);
    innerTag.attr('src', img.path).appendTo(outerTag);
    
    outerTag.appendTo(columns[i%3]);
  }
}

sortBySizeAndType();
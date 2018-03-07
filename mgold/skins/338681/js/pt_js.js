//普通产品滚�?

 var speed=25//速度数值越大速度越慢
  demo2.innerHTML=demo1.innerHTML
  function Marquee()
  {
  if(demo2.offsetWidth-demo.scrollLeft<=0)
  demo.scrollLeft-=demo1.offsetWidth
  else
  {
  demo.scrollLeft++
  }
  }
  var MyMar=setInterval(Marquee,speed)
  demo.onmouseover=function() 
  {
  clearInterval(MyMar)
  }
  demo.onmouseout=function() 
  {
  MyMar=setInterval(Marquee,speed)
  }

//普通产品目�?


var aaa = document.getElementsByTagName('div');
	var j =0;
	for(i=0;i<aaa.length;i++)
	{
		if(aaa[i].id.indexOf('submenu_')>-1 && j ==0 )		
		{
			aaa[i].style.display = '';
			break;
		}
	}	
function showsubmenu(sid)
{
	var aaa = document.getElementsByTagName('div');
	var j =0;
	for(i=0;i<aaa.length;i++)
	{
		if(aaa[i].id.indexOf('submenu_')>-1)			
			aaa[i].style.display = 'none';
	}	
	var bbb = document.getElementById("submenu_" + sid );
	bbb.style.display= '';
}
// $(function() {
// 	$(".lined").linedtextarea(
// 		{selectedLine: 1}
// 	);
// });

function ss()
{
var x=$('#getr').val();

var tgs=x.match(/<(.*?)>/g);

var str=tgs.toString();

var naa=str.replace(/<\/(.*?)>,/g,"");
var rs=naa.split(',');
var status="",xxx="",yyy="";
for(i=0;i<rs.length;i++)
{
  //alert(naa[i]);
  var sty = rs[i].match( /style="(.*?)"/g);
  if(sty!=null)
  {
var idv = rs[i].match( /id="(.*?)"/g);
var clsv = rs[i].match( /class="(.*?)"/g);
var tgv=rs[i].match(/<(.*?) /g);
if(idv!=null)
{
  //alert(idv+"1st idv");
  idv=idv+"";
  var qq = idv.match( /"(.*?)"/g);
  qq+="";
  //console.log(qq+" qq");
  var q = qq.replace( /"/g,"");
  q+="";
  //console.log(q+" q");
  sty+="";
  var qq = sty.match( /"(.*?)"/g);
  qq+="";
  var qp = qq.replace( /"/g,"");
  qp+="";
    xxx+="#"+q+"{"+qp+"} \n";
   // console.log(xxx+ " xxx");
   // alert(xxx+"your style 1")
}else if(clsv!=null)
{

clsv=clsv+"";
  var qq = clsv.match( /"(.*?)"/g);
  qq+="";
  //console.log(qq+" qq");
  var q = qq.replace( /"/g,"");
  q+="";
 // console.log(q+" q");
  sty+="";
  var qq = sty.match( /"(.*?)"/g);
  qq+="";
  var qp = qq.replace( /"/g,"");
  qp+="";
    xxx+="."+q+"{"+qp+"} \n";
    //console.log(xxx+ " xxx");

}
else
{
tgv=tgv+"";
  var q = tgv.replace( /</g,"");
  q+="";
 // console.log(q+" tag");
  sty+="";
  var qq = sty.match( /"(.*?)"/g);
  qq+="";
  var qp = qq.replace( /"/g,"");
  qp+="";
    xxx+=q+"{"+qp+"} \n";
    //console.log(xxx+ " xxx");

}

  }

  
}
$('#putr').val ("\n\n\n" + xxx);
$( "#op" ).dialog( "destroy" );
    $( "#op" ).dialog({
      height: 480,width: 640,
      modal: true
    });


}
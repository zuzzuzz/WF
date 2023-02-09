Day 2 Portfolio 
![Screen Shot 2023-02-08 at 9 27 45 PM](https://user-images.githubusercontent.com/61067182/217710519-f5408c81-fb30-4b26-8428-8d7f773d931a.png)


# WF (day1)
WF assignments and practices

![Screen Shot 2023-02-06 at 8 45 22 PM](https://user-images.githubusercontent.com/61067182/217134828-71aa92b4-28ff-4b2c-b836-a05e40e9f84d.png)


75% lost, hard to understand why but found solution easily 

<html>
<body>
	<div id='background'>
        <div id='character' style='position:absolute; top:100px; left:450px; background-image: url("img/down1.png"); width:59px; height:86px;'></div>
    </div>
    <script type="text/javascript">
    var leftValue = 450, topValue = 100; 
        
        function update(){
            document.getElementById("character").style.left = leftValue+"px";
            document.getElementById("character").style.top = topValue+"px";  
        }

	    document.onkeydown = function(e){
            console.log(e); 
            if(e.keyCode == 37) { // LEFT
                leftValue = leftValue - 10; 
            }
            else if (e.keyCode == 39) { // RIGHT
                leftValue = leftValue + 10; 
            }
            else if (e.keyCode == 40) { // DOWN
                topValue = topValue + 10; 
            }
            else if (e.keyCode == 38) { // UP 
                topValue = topValue - 10;  
            }
            update(); 
        }
    </script>
</body>
</html>

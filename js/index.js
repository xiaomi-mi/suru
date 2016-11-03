$(function(){
	var header=$(".header");
	var hin=$(".headerin");
	var span=$(".headerin span");
	var onebox=$(".onebox");
	var onespan=$(".onebox span")
	var one=$(".one");
	var arr=[];
	var arr1=[];
	var input=$(".headerin input");
	var that;
//	var ul=$(".todolist");
	
	if(localStorage.arr){
		arr=JSON.parse(localStorage.arr);
		for(var i=0;i<arr.length;i++){
			$("<span>"+arr[0].name+"</span>").appendTo(hin);
		}
	}
//	if(localStorage.arr1){
//		arr1=JSON.parse(localStorage.arr1);
//		for(var i=0;i<arr1.length;i++){
//			$("<span>"+arr1[i].name+"</span>").appendTo(that);
//		}
//	}
	hin.on("touchend",function(){
//		var clean= hin.children();
//      hin.empty().append(clean);
		hin.children('span').remove()
        input.blur(function(){
        	var v=$.trim(input.val());
			if(!v){
				return;
			}
			var list={
				name:v,
				state:0
			}
			arr.push(list);
			localStorage.arr=JSON.stringify(arr);
			$("<span>"+v+"</span>").appendTo(hin);
//			hin.html(v);
			input.val("");
        })
	})
//	onebox.on("touchend",function(){
////		var clean= hin.children();
////      hin.empty().append(clean);
//		onebox.children('span').remove()
//      one.blur(function(){
//      	var v=$.trim(one.val());
//			if(!v){
//				return;
//			}
//			var list={
//				name:v,
//				state:0
//			}
//			arr1.push(list);
//			localStorage.arr1=JSON.stringify(arr1);
//			$("<span>"+v+"</span>").appendTo(onebox);
////			hin.html(v);
//			one.val("");
//      })
//	})
	
})

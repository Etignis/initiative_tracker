Vue.component('modalWin', {
	props: {
		title: {
			type: String,
			default: ""
		},
		content: {
			type: String,
			default: ""
		}
	},
	data: function(){
		return {
			
		};
	},
	methods: {
		close: function(){
			this.$emit('close');
		}
	},
	computed: {
		
	},

	template: `<div class="mod_win_wrapper" style='background: rgba(0, 0, 0, 0.7);'  @scroll.stop>
	<div class="mod_win">
		<span class="bCloseInfoWin" @click="close">×</span>
		<slot></slot>
	</div>
</div>`
});

Vue.component('list-item', {
	props: {
		id: {
			type: String,
			default: ""
		}, 
		val: {
			type: String,
			default: ""
		},
		list: {
			type: Array
		}
	},
	data: function(){
		return {
			listVisible: false,
			innerId: "",
			filteredList: [],
			innerValue: ""
		};
	},
	methods: {
		input: function(e){
			this.filterList();
			this.$emit("input", e.target.value /*this.value || arguments[0].data*/);
			//this.$emit('input', +e.target.value);
		},
		select: function(sText){
			//this.value = sText;
			this.listVisible = false;
			//this.value = sText;
			this.$emit("input", sText);
		},
		filterList: function() {
			let oRet = [];
			let oInput =  this.$refs[this.innerId];
			
			if(oInput && oInput === document.activeElement) {
				oRet = this.value.length>0? this.list.filter(el => el.trim().toUpperCase().indexOf(this.value.trim().toUpperCase())>-1) :this.list;
			}
			this.listVisible = oRet.length > 0;
			this.filteredList = oRet;
		},
		toggleList: function(){
			this.listVisible = !this.listVisible;
			if(this.listVisible) {
				let oInput =  this.$refs[this.innerId];
				oInput.focus();
			}
		},
		hideList: function() {
			setTimeout(
				function(){
					this.listVisible = false;
				}.bind(this), 
				300
			);
		}
	},
	computed: {
		value: {
			get: function(){
				return this.innerValue || this.val;
			},
			set: function(sVal){
				this.innerValue = sVal;
			}
		}
	},
	created: function(){
		//this.value = this.val;
		this.innerId = this.Id || "combobox_input_"+Date.now();
		this.filteredList = this.list;
	},

	template: `<div class="list">
	
</div>`
});
Vue.component('list', {
	props: {
		id: {
			type: String,
			default: ""
		}, 		
		list: {
			type: Array
		}
	},
	data: function(){
		return {
			listVisible: false,
			innerId: "",
			filteredList: [],
			innerValue: ""
		};
	},
	methods: {
		input: function(e){
			this.filterList();
			this.$emit("input", e.target.value /*this.value || arguments[0].data*/);
			//this.$emit('input', +e.target.value);
		},
		select: function(sText){
			//this.value = sText;
			this.listVisible = false;
			//this.value = sText;
			this.$emit("input", sText);
		},
		filterList: function() {
			let oRet = [];
			let oInput =  this.$refs[this.innerId];
			
			if(oInput && oInput === document.activeElement) {
				oRet = this.value.length>0? this.list.filter(el => el.trim().toUpperCase().indexOf(this.value.trim().toUpperCase())>-1) :this.list;
			}
			this.listVisible = oRet.length > 0;
			this.filteredList = oRet;
		},
		toggleList: function(){
			this.listVisible = !this.listVisible;
			if(this.listVisible) {
				let oInput =  this.$refs[this.innerId];
				oInput.focus();
			}
		},
		hideList: function() {
			setTimeout(
				function(){
					this.listVisible = false;
				}.bind(this), 
				300
			);
		}
	},
	computed: {
		value: {
			get: function(){
				return this.innerValue || this.val;
			},
			set: function(sVal){
				this.innerValue = sVal;
			}
		}
	},
	created: function(){
		//this.value = this.val;
		this.innerId = this.Id || "combobox_input_"+Date.now();
		this.filteredList = this.list;
	},

	template: `<div class="list">
	<list-item v-for="item in list">
	</list-item>
</div>`
});

Vue.component('tracker', {
	props: {
		id: {
			type: String,
			default: ""
		}, 
		val: {
			type: String,
			default: ""
		},
		list: {
			type: Array
		}
	},
	data: function(){
		return {
			listVisible: false,
			innerId: "",
			filteredList: [],
			innerValue: ""
		};
	},
	methods: {
		input: function(e){
			this.filterList();
			this.$emit("input", e.target.value /*this.value || arguments[0].data*/);
			//this.$emit('input', +e.target.value);
		},
		select: function(sText){
			//this.value = sText;
			this.listVisible = false;
			//this.value = sText;
			this.$emit("input", sText);
		},
		filterList: function() {
			let oRet = [];
			let oInput =  this.$refs[this.innerId];
			
			if(oInput && oInput === document.activeElement) {
				oRet = this.value.length>0? this.list.filter(el => el.trim().toUpperCase().indexOf(this.value.trim().toUpperCase())>-1) :this.list;
			}
			this.listVisible = oRet.length > 0;
			this.filteredList = oRet;
		},
		toggleList: function(){
			this.listVisible = !this.listVisible;
			if(this.listVisible) {
				let oInput =  this.$refs[this.innerId];
				oInput.focus();
			}
		},
		hideList: function() {
			setTimeout(
				function(){
					this.listVisible = false;
				}.bind(this), 
				300
			);
		}
	},
	computed: {
		value: {
			get: function(){
				return this.innerValue || this.val;
			},
			set: function(sVal){
				this.innerValue = sVal;
			}
		}
	},
	created: function(){
		//this.value = this.val;
		this.innerId = this.Id || "combobox_input_"+Date.now();
		this.filteredList = this.list;
	},

	template: `<div class="tracker">
	<list>
	</list>
	<div>
		<button></button>
	</div>
	<list>
	</list>
	<div>
		<button></button>
	</div>
</div>`
});

$(document).ready(function(){	
var app = new Vue({
	el: '#app',
	data: {
		items: [
		],		
		fDataLoaded: false,
		editor: {
			data: {
				
			},
			mode: "add"
		},
		
		
		bModalWinShow: false
	},

	computed: {
		aPlaysItems: function(){
			return this.aAfishaItems.filter(el => el.isPlay);
		},
		aNonPlaysItems: function(){
			return this.aAfishaItems.filter(el => !el.isPlay);
		},
		aAfisha: function(){
			var oDict=this.oMonthDict;
			var sMonth="";
			var aRet = [];
			var oRet = {};
			this.aPlaysItems.sort(function(a, b){
				if (a.dt+a.tm < b.dt+b.tm)
					return -1;
				if (a.dt+a.tm > b.dt+b.tm)
					return 1;
				return 0;
			}).forEach(function(el){
				let sLocalMonth = el.dt.substr(5, 2);
				if(sMonth != sLocalMonth) {		
					sMonth = sLocalMonth;
					oRet[sMonth] = [];
				}
				el.money = el.coste;
				oRet[sMonth].push(el);
			});
			
			for(var key in oRet) {
				aRet.push({
					month: oDict[key],
					items: oRet[key]
				});
			}
			
			return aRet;
		},
		aOtherAfisha: function(){
			var oDict=this.oMonthDict;
			var sMonth="";
			var aRet = [];
			var oRet = {};
			this.aNonPlaysItems
				.sort(function(a, b){
				if (a.dt+a.tm < b.dt+b.tm)
					return -1;
				if (a.dt+a.tm > b.dt+b.tm)
					return 1;
				return 0;
			}).forEach(function(el){
				let sLocalMonth = el.dt.substr(5, 2);
				if(sMonth != sLocalMonth) {		
					sMonth = sLocalMonth;
					oRet[sMonth] = [];
				}
				oRet[sMonth].push(el);
			});
			
			for(var key in oRet) {
				aRet.push({
					month: oDict[key],
					items: oRet[key]
				});
			}
			
			return aRet;
		}
		
	},
	mounted: function() {
		
	},
	
	created: function(){
		this.loadData();
	},
	methods: {
		loadData: function(){
			$.ajax({
				url: "https://tteatr.ru/api/afisha/index.php?type=afisha",
				method: 'POST',
				data: {
					//"folder_id": browser_folder_id
				},
				success: function (data) {
					this.aAfishaItems = JSON.parse(data);
					//this.foldersList = data;
					this.fDataLoaded = true;
				}.bind(this),
				error: function (error) {
					//alert(JSON.stringify(error));
					// this.aAfishaItems = [{"id":"69","play":"\u041f\u0440\u0438\u043d\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0433\u043e\u0440\u043e\u0448\u0438\u043d\u044b","dt":"2019-03-29","tm":"18:00:00","info":"\u0412\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u043c \u043d\u0430 \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043b\u0435 ''\u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430'' \u0432 \u0420\u0414\u041c \u0414\u0432\u043e\u0440\u0435\u0446 \u041c\u043e\u043b\u043e\u0434\u0451\u0436\u0438.","place":"\u0420\u0414\u041c \u0414\u0432\u043e\u0440\u0435\u0446 \u041c\u043e\u043b\u043e\u0434\u0451\u0436\u0438","autor":"\u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0422\u044b\u0449\u0443\u043a","style":"\u0441\u043a\u0430\u0437\u043a\u0430","age_limit":"5","link":"Princess","img":"imgs\/plays\/Princess2.jpg","img_back":"imgs\/plays\/vk\/back_princess.jpg","img_min":"imgs\/plays\/vk\/min_princess.png","insta_img":"imgs\/plays\/insta\/insta_princess.jpg","insta_color":"255,255,255","insta_text_pos":[50,660],"insta_logo_pos":null,"color":"255,255,255","day_date":"29 \u043c\u0430\u0440\u0442\u0430","day_name":"\u041f\u044f\u0442\u043d\u0438\u0446\u0430","time":"18:00"},{"id":"68","play":"\u0416\u0451\u043d\u044b \u0430\u0440\u0442\u0438\u0441\u0442\u043e\u0432","dt":"2019-04-07","tm":"16:00:00","info":"\u0417\u0430\u0449\u0438\u0442\u0430 \u0437\u0432\u0430\u043d\u0438\u044f ''\u041d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0435\u0430\u0442\u0440\u0430''||\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 14+||\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0432\u0441\u0435\u0445!","place":"\u041c\u0430\u043b\u044b\u0439 \u0417\u0430\u043b \u0414\u041a \"\u042f\u0443\u0437\u0430\"","autor":"\u0410\u043d\u0442\u043e\u043d \u0427\u0435\u0445\u043e\u0432","style":"\u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c","age_limit":"14","link":"Artists_Wives","img":"imgs\/plays\/ArtistWifes.jpg","img_back":"imgs\/plays\/vk\/back_chekhov.jpg","img_min":"imgs\/plays\/vk\/min_checkhov.png","insta_img":"imgs\/plays\/insta\/insta_chekhov.jpg","insta_color":"255,0,102","insta_text_pos":[30,30],"insta_logo_pos":[900,30],"color":"255,0,102","day_date":"7 \u0430\u043f\u0440\u0435\u043b\u044f","day_name":"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","time":"16:00"}];
				}.bind(this)
			});
			$.ajax({
				url: "https://tteatr.ru/api/afisha/plays.php",
				method: 'POST',
				data: {
					//"folder_id": browser_folder_id
				},
				success: function (data) {
					this.aPlays = JSON.parse(data);
					//this.foldersList = data;
				}.bind(this),
				error: function (error) {
					//alert(JSON.stringify(error));
					// this.aPlays = [{"id":"22","play":"\u0417\u043e\u043b\u0443\u0448\u043a\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"21","play":"\u041f\u0440\u0438\u043d\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0433\u043e\u0440\u043e\u0448\u0438\u043d\u044b","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"20","play":"\u0416\u0451\u043d\u044b \u0430\u0440\u0442\u0438\u0441\u0442\u043e\u0432","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"19","play":"\u041c\u043e\u0440\u043e\u0437\u043a\u043e","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"18","play":"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0432\u0435\u0434\u044c\u043c\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"17","play":"\u041c\u0435\u0441\u044c\u0435 \u0410\u043c\u0438\u043b\u044c\u043a\u0430\u0440 \u043f\u043b\u0430\u0442\u0438\u0442 ","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"16","play":"\u041d\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u041a\u043e\u043b\u043e\u0431\u043a\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"15","play":"\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u044b\u0439 \u043a\u0443\u0432\u0448\u0438\u043d","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"14","play":"\u041b\u0435\u0434\u044f\u043d\u044b\u0445 \u0434\u0435\u043b \u043c\u0430\u0441\u0442\u0435\u0440\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"12","play":"\u0411\u0435\u043b\u044b\u0439 \u043a\u0440\u043e\u043b\u0438\u043a","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"11","play":"\u041a\u0430\u043b\u043e\u0448\u0438 \u0441\u0447\u0430\u0441\u0442\u044c\u044f","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"10","play":"\u0421\u043c\u0435\u0448\u043d\u044b\u0435 \u0436\u0435\u043c\u0430\u043d\u043d\u0438\u0446\u044b","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"9","play":"\u0426\u0438\u0440\u043a \u0428\u0430\u0440\u0434\u0430\u043c","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"8","play":"\u0421\u0435\u0441\u0442\u0440\u0430 \u043c\u043e\u044f \u0420\u0443\u0441\u0430\u043b\u043e\u0447\u043a\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"7","play":"\u0414\u0432\u0430 \u043a\u043b\u0435\u043d\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"6","play":"\u0423\u0447\u0438\u0442\u0435\u0441\u044c \u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u0437\u0430\u043e\u0447\u043d\u043e","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"5","play":"\u041c\u0435\u0434\u043d\u043e\u0439 \u0433\u043e\u0440\u044b \u0445\u043e\u0437\u044f\u0439\u043a\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"4","play":"\u041b\u043e\u0442\u0435\u0440\u0435\u044f","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"3","play":"\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0428\u0430\u043f\u043e\u0447\u043a\u0430","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"2","play":"\u041d\u043e\u0432\u043e\u0435 \u043f\u043b\u0430\u0442\u044c\u0435 \u043a\u043e\u0440\u043e\u043b\u044f","autor":null,"style":null,"age_limit":null,"link":null,"img":null},{"id":"1","play":"\u0418\u0437 \u0436\u0438\u0437\u043d\u0438 \u043f\u0440\u0438\u043d\u0446\u0435\u0432 \u0438 \u043f\u0440\u0438\u043d\u0446\u0435\u0441\u0441","autor":null,"style":null,"age_limit":null,"link":null,"img":null}];
				}.bind(this)
			});
		},
		showEditor: function(){
		//	this.$refs.af_editor.init();
			this.bModalWinShow = true;
		},
		closeModWin: function(){
			this.bModalWinShow = false;
		},
		_clearEditor: function() {
			for (let key in this.editor.data) {
				this.editor.data[key] = "";
			}
		},
		
		_editItem: function(nItemId, sMode) {
			this._clearEditor();
			var oItem = this.aAfishaItems.find(el => el.id==nItemId);
			oItem.name = oItem.play;
			if(oItem) {
				for( let key in this.editor.data) {
					this.editor.data[key] = String(oItem[key]);
				}
				this.editor.mode=sMode;
				this.showEditor();
			}
		},
		
		editPlayItem: function(nItemId){
			this._editItem(nItemId, "editPlay");
		},
		delPlayItem: function(nItemId){
			this._sendData("del", {afisha_id: nItemId});
		},
		showPlayItem: function(nItemId){
			this._sendData("show", {afisha_id: nItemId});
		},
		hidePlayItem: function(nItemId){
			this._sendData("hide", {afisha_id: nItemId});
		},
		editOtherItem: function(nItemId){
			this._editItem(nItemId, "editEvent");
		},
		delOtherItem: function(nItemId){
			this._sendData("del", {afisha_id: nItemId});
		},
		showOtherItem: function(nItemId){
			this._sendData("show", {afisha_id: nItemId});
		},
		hideOtherItem: function(nItemId){
			this._sendData("hide", {afisha_id: nItemId});
		},
		
		_sendData: function(sMode, oData) {
			var aParams = [];
			for(let key in oData) {
				aParams.push(key +"="+ encodeURIComponent(oData[key]))
			}
			var sRequest = aParams.join("&");
			
			/// var data='stat=save_edit&a_play='+play+'&a_text='+text+'&a_date='+date+'&a_time='+time+'&a_id='+id+'&a_kind='+kind+'&a_title='+title;
  
			/// "afisha_id=75&play_id=&name=%D0%92%D1%82%D0%BE%D1%80%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D1%85%20%D0%B4%D0%B2%D0%B5%D1%80%D0%B5%D0%B9&date=2019-09-07&time=18%3A00%3A00&info=%D0%9F%D0%BE%20%D0%BD%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%B8%20%D0%B2%20%D1%8D%D1%82%D0%BE%D0%BC%20%D0%B3%D0%BE%D0%B4%D1%83%20%D0%B1%D1%83%D0%B4%D0%B5%D1%82%20%D0%B5%D1%89%D0%B5%20%D0%BE%D0%B4%D0%B8%D0%BD%20%D0%94%D0%B5%D0%BD%D1%8C%20%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D1%85%20%D0%94%D0%B2%D0%B5%D1%80%D0%B5%D0%B9.%20%D0%9E%D0%BD%20%D0%BF%D1%80%D0%BE%D0%B9%D0%B4%D0%B5%D1%82%20%D0%B2%20%D0%94%D0%9A%20''%D0%AF%D1%83%D0%B7%D0%B0''%207-%D0%B3%D0%BE%20%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8F%20%D1%81%2011%3A00%20%D0%B4%D0%BE%2015%3A00.%0A%0A%D0%9F%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D0%B8%D1%82%D0%B5!&place=%D0%94%D0%9A%20%22%D0%AF%D1%83%D0%B7%D0%B0%22&age=null&mode=editEvent"
			
			
			/*
			afisha_id: this.id,
				play_id: this.innerPlayId,
				name: this.innerName,
				date: this.innerDate,
				time: this.innerTime,
				info: this.innerInfo,
				place: this.innerPlace,
				age: this.innerAge,
				mode: this.mode
			*/
			let data ="";
			let oSendData = {}; 
			switch(sMode) {
				case "editPlay":
				case "editEvent":
				case "save": oSendData = {
					stat: "save_edit",
					a_play: oData.play_id,
					a_text: oData.info,
					a_date: oData.date,
					a_time: oData.time,
					a_id: oData.afisha_id,
					a_kind: oData.play_id? 0: 1,
					a_title: oData.name,
					
					a_place: oData.place,
					a_coste: oData.coste==0? "Вход свободный" : oData.coste,
					a_age_limit: oData.age_limit
				};
					break;
				case "addEvent": 
				case "addPlay": 
				case "add": oSendData = {
					stat: "add",
					a_play: oData.play_id,
					a_text: oData.info,
					a_date: oData.date,
					a_time: oData.time,
					a_id: oData.afisha_id,
					a_kind: oData.play_id? 0: 1,
					a_title: oData.name,
					
					a_place: oData.place,
					a_coste: oData.coste==0? "Вход свободный" : oData.coste,
					a_age_limit: oData.age_limit
				};
					break;
				case "hide": oSendData = {
					stat: "del",
					item_id: oData.afisha_id
				};
					break;
				case "show": oSendData = {
					stat: "show",
					item_id: oData.afisha_id
				};
					break;
			}
			let aData =[];
			
			for(let key in oSendData) {
				aData.push(key+"="+oSendData[key]);
			}
			data = aData.join("&");
			
			$.ajax({
				type: 'POST',		
				url: this.scriptURL,
				data: data,
				success: function(answ){
					if(answ==1) {
					 mod_alert("Успешно.", 1500, 300);
					 this.loadData();
					} else {
					 alert('ошибка ['+answ+']');
					}										 
				}.bind(this)
			});
		},
		
		saveEdited: function(oData) {
			this._sendData(oData.mode, oData);
			this.closeModWin();
		},
		
		addPlay: function() {
			this._clearEditor();
			this.editor.mode="addPlay";
			this.showEditor();
		},
		
		addEvent: function() {
			this._clearEditor();
			this.editor.mode="addEvent";
			this.showEditor();
		}
	}
});
});
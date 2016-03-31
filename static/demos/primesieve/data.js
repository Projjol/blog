data = [{"t":0,"command":"create goroutine","name":"main"},
{"t":361005,"command":"create goroutine","name":"Generate #17","parent":"main"},
{"t":105145613,"command":"send to channel","from":"Generate #17","to":"main","ch":"ch","value":2,"duration":426020},
{"t":106498456,"command":"create goroutine","name":"Filter #33","parent":"main"},
{"t":210580493,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":3,"duration":203106},
{"t":210830350,"command":"send to channel","from":"Filter #33","to":"main","ch":"out","value":3,"duration":26146},
{"t":210916378,"command":"create goroutine","name":"Filter1 #19","parent":"main"},
{"t":315120381,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":4,"duration":120638},
{"t":419608682,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":5,"duration":74722},
{"t":419715522,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":5,"duration":41620},
{"t":419784316,"command":"send to channel","from":"Filter1 #19","to":"main","ch":"out1","value":5,"duration":18557},
{"t":419882822,"command":"create goroutine","name":"Filter2 #34","parent":"main"},
{"t":524211310,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":6,"duration":162506},
{"t":628612894,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":7,"duration":88530},
{"t":628734065,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":7,"duration":26850},
{"t":628784040,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":7,"duration":29971},
{"t":628839770,"command":"send to channel","from":"Filter2 #34","to":"main","ch":"out2","value":7,"duration":17540},
{"t":628906820,"command":"create goroutine","name":"Filter3 #20","parent":"main"},
{"t":733223223,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":8,"duration":86767},
{"t":837677965,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":9,"duration":80191},
{"t":837814005,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":9,"duration":37608},
{"t":942133106,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":10,"duration":85084},
{"t":1046627565,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":11,"duration":92201},
{"t":1046759816,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":11,"duration":33340},
{"t":1046818101,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":11,"duration":30800},
{"t":1046878576,"command":"send to channel","from":"Filter2 #34","to":"Filter3 #20","ch":"out2","value":11,"duration":31098},
{"t":1046937046,"command":"send to channel","from":"Filter3 #20","to":"main","ch":"out3","value":11,"duration":27774},
{"t":1047025345,"command":"create goroutine","name":"Filter4 #5","parent":"main"},
{"t":1151048798,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":12,"duration":89593},
{"t":1255637965,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":13,"duration":74665},
{"t":1255742476,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":13,"duration":34335},
{"t":1255803942,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":13,"duration":32588},
{"t":1255861465,"command":"send to channel","from":"Filter2 #34","to":"Filter3 #20","ch":"out2","value":13,"duration":30531},
{"t":1255915655,"command":"send to channel","from":"Filter3 #20","to":"Filter4 #5","ch":"out3","value":13,"duration":28826},
{"t":1255968734,"command":"send to channel","from":"Filter4 #5","to":"main","ch":"out4","value":13,"duration":17267},
{"t":1256037102,"command":"create goroutine","name":"Filter5 #21","parent":"main"},
{"t":1360712597,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":14,"duration":113691},
{"t":1464585674,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":15,"duration":78010},
{"t":1464689452,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":15,"duration":24618},
{"t":1568972145,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":16,"duration":79399},
{"t":1673738846,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":17,"duration":84489},
{"t":1673875171,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":17,"duration":47105},
{"t":1673948365,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":17,"duration":45929},
{"t":1674022446,"command":"send to channel","from":"Filter2 #34","to":"Filter3 #20","ch":"out2","value":17,"duration":28725},
{"t":1674076121,"command":"send to channel","from":"Filter3 #20","to":"Filter4 #5","ch":"out3","value":17,"duration":29590},
{"t":1674132726,"command":"send to channel","from":"Filter4 #5","to":"Filter5 #21","ch":"out4","value":17,"duration":35348},
{"t":1674196675,"command":"send to channel","from":"Filter5 #21","to":"main","ch":"out5","value":17,"duration":18039},
{"t":1674292421,"command":"create goroutine","name":"Filter6 #22","parent":"main"},
{"t":1778263122,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":18,"duration":85009},
{"t":1882434307,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":19,"duration":108555},
{"t":1882578025,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":19,"duration":33615},
{"t":1882638800,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":19,"duration":31192},
{"t":1882697500,"command":"send to channel","from":"Filter2 #34","to":"Filter3 #20","ch":"out2","value":19,"duration":29464},
{"t":1882766125,"command":"send to channel","from":"Filter3 #20","to":"Filter4 #5","ch":"out3","value":19,"duration":27186},
{"t":1882818035,"command":"send to channel","from":"Filter4 #5","to":"Filter5 #21","ch":"out4","value":19,"duration":31447},
{"t":1882873721,"command":"send to channel","from":"Filter5 #21","to":"Filter6 #22","ch":"out5","value":19,"duration":29941},
{"t":1882929141,"command":"send to channel","from":"Filter6 #22","to":"main","ch":"out6","value":19,"duration":14113},
{"t":1882988385,"command":"create goroutine","name":"Filter7 #35","parent":"main"},
{"t":1986995120,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":20,"duration":142459},
{"t":2091591041,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":21,"duration":165075},
{"t":2091816590,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":21,"duration":103973},
{"t":2196078233,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":22,"duration":141730},
{"t":2300422963,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":23,"duration":124890},
{"t":2300617773,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":23,"duration":52069},
{"t":2300699513,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":23,"duration":55847},
{"t":2300842430,"command":"send to channel","from":"Filter2 #34","to":"Filter3 #20","ch":"out2","value":23,"duration":39299},
{"t":2300934181,"command":"send to channel","from":"Filter3 #20","to":"Filter4 #5","ch":"out3","value":23,"duration":35205},
{"t":2301022722,"command":"send to channel","from":"Filter4 #5","to":"Filter5 #21","ch":"out4","value":23,"duration":73120},
{"t":2301125120,"command":"send to channel","from":"Filter5 #21","to":"Filter6 #22","ch":"out5","value":23,"duration":34765},
{"t":2301201776,"command":"send to channel","from":"Filter6 #22","to":"Filter7 #35","ch":"out6","value":23,"duration":36064},
{"t":2301287715,"command":"send to channel","from":"Filter7 #35","to":"main","ch":"out7","value":23,"duration":29652},
{"t":2301378628,"command":"create goroutine","name":"Filter8 #36","parent":"main"},
{"t":2404817294,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":24,"duration":98529},
{"t":2509378803,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":25,"duration":83498},
{"t":2509493265,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":25,"duration":36140},
{"t":2509556732,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":25,"duration":31243},
{"t":2613929022,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":26,"duration":79581},
{"t":2718345636,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":27,"duration":90184},
{"t":2718466725,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":27,"duration":29540},
{"t":2822815534,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":28,"duration":74269},
{"t":2927368852,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":29,"duration":79718},
{"t":2927511302,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":29,"duration":38028},
{"t":2927578972,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":29,"duration":35870},
{"t":2927645067,"command":"send to channel","from":"Filter2 #34","to":"Filter3 #20","ch":"out2","value":29,"duration":47669},
{"t":2927720730,"command":"send to channel","from":"Filter3 #20","to":"Filter4 #5","ch":"out3","value":29,"duration":34061},
{"t":2927781251,"command":"send to channel","from":"Filter4 #5","to":"Filter5 #21","ch":"out4","value":29,"duration":30745},
{"t":2927881494,"command":"send to channel","from":"Filter5 #21","to":"Filter6 #22","ch":"out5","value":29,"duration":78846},
{"t":2927992722,"command":"send to channel","from":"Filter6 #22","to":"Filter7 #35","ch":"out6","value":29,"duration":34310},
{"t":2928055213,"command":"send to channel","from":"Filter7 #35","to":"Filter8 #36","ch":"out7","value":29,"duration":33413},
{"t":2928116330,"command":"send to channel","from":"Filter8 #36","to":"main","ch":"out8","value":29,"duration":21031},
{"t":2928185383,"command":"create goroutine","name":"Filter9 #23","parent":"main"},
{"t":3031908216,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":30,"duration":73347},
{"t":3136277444,"command":"send to channel","from":"Generate #17","to":"Filter #33","ch":"ch","value":31,"duration":94302},
{"t":3136402382,"command":"send to channel","from":"Filter #33","to":"Filter1 #19","ch":"out","value":31,"duration":28549},
{"t":3136456391,"command":"send to channel","from":"Filter1 #19","to":"Filter2 #34","ch":"out1","value":31,"duration":27825},
{"t":3136515691,"command":"send to channel","from":"Filter2 #34","to":"Filter3 #20","ch":"out2","value":31,"duration":29400},
{"t":3136570632,"command":"send to channel","from":"Filter3 #20","to":"Filter4 #5","ch":"out3","value":31,"duration":28179},
{"t":3136623861,"command":"send to channel","from":"Filter4 #5","to":"Filter5 #21","ch":"out4","value":31,"duration":25039},
{"t":3136671533,"command":"send to channel","from":"Filter5 #21","to":"Filter6 #22","ch":"out5","value":31,"duration":28180},
{"t":3136723282,"command":"send to channel","from":"Filter6 #22","to":"Filter7 #35","ch":"out6","value":31,"duration":27168},
{"t":3136779432,"command":"send to channel","from":"Filter7 #35","to":"Filter8 #36","ch":"out7","value":31,"duration":28271},
{"t":3136848662,"command":"send to channel","from":"Filter8 #36","to":"Filter9 #23","ch":"out8","value":31,"duration":53149},
{"t":3136929156,"command":"send to channel","from":"Filter9 #23","to":"main","ch":"out9","value":31,"duration":40636},
{"t":3136985876,"command":"stop goroutine","name":"main"}];
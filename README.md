# Lister

###### CSS File
```
<link rel="stylesheet" href="/path/to/lister/css/lister.min.css">
```

###### Javascript File
```
<script type="text/javascript" src="/path/to/lister/jss/lister.min.js"></script>
```

###### Basic Template
```
<form class="listAdder" action="" method="GET" id="YourListerID">
	<input type="text">
	<input type="button" value="Add Item">
	<ul></ul>
	<input type="submit">
</form>
```

###### Usage
```
var yourList = new lister("YourListerID");
```
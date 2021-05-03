(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{761:function(t,n,s){"use strict";s.r(n);var e=s(60),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("blockquote",[s("p",[t._v("Everything in Python, from numbers to modules, is an object."),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.oreilly.com/pub/au/2909",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bill Lubanovic"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"object-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-types"}},[t._v("#")]),t._v(" Object Types")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Object Type")]),t._v(" "),s("th",[t._v("Example literals/creation")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Numbers")]),t._v(" "),s("td",[t._v("1234, 3.1415, 3+4j, Decimal, Fraction")])]),t._v(" "),s("tr",[s("td",[t._v("Strings")]),t._v(" "),s("td",[t._v("'python', \"Jupiter's\", b'a\\x01c'")])]),t._v(" "),s("tr",[s("td",[t._v("Lists")]),t._v(" "),s("td",[t._v("[1, [2, 'three'], 4]")])]),t._v(" "),s("tr",[s("td",[t._v("Dictionaries")]),t._v(" "),s("td",[t._v("{'Apple': 'iPhone', 'Google': 'Android'}")])]),t._v(" "),s("tr",[s("td",[t._v("Tuples")]),t._v(" "),s("td",[t._v("{1, 'php', 3, 'Y'}")])]),t._v(" "),s("tr",[s("td",[t._v("Files")]),t._v(" "),s("td",[t._v("myFile = open('java', 'r')")])]),t._v(" "),s("tr",[s("td",[t._v("Sets")]),t._v(" "),s("td",[t._v("set('xyz'), {'x', 'y', 'z'}")])]),t._v(" "),s("tr",[s("td",[t._v("Other core types")]),t._v(" "),s("td",[t._v("Booleans, types, None")])]),t._v(" "),s("tr",[s("td",[t._v("Program unit types")]),t._v(" "),s("td",[t._v("Functions, modules, classes")])]),t._v(" "),s("tr",[s("td",[t._v("Implementation related types")]),t._v(" "),s("td",[t._v("Compiled code, stack tracebacks")])])])]),t._v(" "),s("h3",{attrs:{id:"float-浮點數"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#float-浮點數"}},[t._v("#")]),t._v(" float 浮點數")]),t._v(" "),s("ul",[s("li",[t._v("as_integer_ratio() 方法")]),t._v(" "),s("li",[t._v("is_integer() 方法")]),t._v(" "),s("li",[t._v("hex() 方法")]),t._v(" "),s("li",[t._v("fromhex() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('my_float = 8.7\nprint(my_float.as_integer_ratio())\nprint(my_float.is_integer())\nprint(my_float.hex())\nprint(float.fromhex("0x1.1666666666666p+3"))\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"int-整數"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#int-整數"}},[t._v("#")]),t._v(" int 整數")]),t._v(" "),s("ul",[s("li",[t._v("bit_length() 方法")]),t._v(" "),s("li",[t._v("to_bytes() 方法")]),t._v(" "),s("li",[t._v("from_bytes() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('my_int = 87\nprint(my_int.bit_length())\nprint(my_int.to_bytes(length = 2, byteorder = "big"))\nprint(int.from_bytes(b\'\\x00W\', byteorder = "big"))\nprint("---")\nprint(my_int.to_bytes(length = 10, byteorder = "big"))\nprint(int.from_bytes(b\'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00W\', byteorder = "big"))\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"complex-複數"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complex-複數"}},[t._v("#")]),t._v(" complex 複數")]),t._v(" "),s("ul",[s("li",[t._v("real 屬性")]),t._v(" "),s("li",[t._v("imag 屬性")]),t._v(" "),s("li",[t._v("conjugate() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("my_complex = 8 + 7j\nprint(my_complex.real)\nprint(my_complex.imag)\nprint(my_complex.conjugate())\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"str-文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#str-文字"}},[t._v("#")]),t._v(" str 文字")]),t._v(" "),s("ul",[s("li",[t._v("startswith() 方法")]),t._v(" "),s("li",[t._v("endswith() 方法")]),t._v(" "),s("li",[t._v("find() 方法")]),t._v(" "),s("li",[t._v("count() 方法")]),t._v(" "),s("li",[t._v("strip() 方法")]),t._v(" "),s("li",[t._v("capitalize() 方法")]),t._v(" "),s("li",[t._v("title() 方法")]),t._v(" "),s("li",[t._v("upper() 方法")]),t._v(" "),s("li",[t._v("lower() 方法")]),t._v(" "),s("li",[t._v("swapcase() 方法")]),t._v(" "),s("li",[t._v("replace() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('my_str = "It\'s the 2017 ithelp ironman contest!!!"\n\nprint(my_str.startswith("It\'s")) # True\nprint(my_str.endswith("contest??")) # False\nprint(my_str.find("2017")) # 9\nprint(my_str.count("!")) # 3\nprint(my_str.strip("!")) # It\'s the 2017 ithelp ironman contest\nprint(my_str.capitalize()) # It\'s the 2017 ithelp ironman contest!!!\nprint(my_str.title()) # It\'S The 2017 Ithelp Ironman Contest!!!\nprint(my_str.upper()) # IT\'S THE 2017 ITHELP IRONMAN CONTEST!!!\nprint(my_str.lower()) # it\'s the 2017 ithelp ironman contest!!!\nprint(my_str.swapcase()) # iT\'S THE 2017 ITHELP IRONMAN CONTEST!!!\nprint(my_str.replace("contest", "competition")) # It\'s the 2017 ithelp ironman competition!!!\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"bool-布林值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bool-布林值"}},[t._v("#")]),t._v(" bool 布林值")]),t._v(" "),s("ul",[s("li",[t._v("bit_length() 方法")]),t._v(" "),s("li",[t._v("to_bytes() 方法")]),t._v(" "),s("li",[t._v("from_bytes() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('my_bool = True\nprint(my_bool.bit_length())\nprint(my_bool.to_bytes(length = 2, byteorder = "big"))\nprint(bool.from_bytes(b\'\\x00\\x01\', byteorder = "big"))\nprint("---")\nprint(my_bool.to_bytes(length = 10, byteorder = "big"))\nprint(bool.from_bytes(b\'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\', byteorder = "big"))\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" list")]),t._v(" "),s("ul",[s("li",[t._v("append() 方法")]),t._v(" "),s("li",[t._v("insert() 方法")]),t._v(" "),s("li",[t._v("remove() 方法")]),t._v(" "),s("li",[t._v("pop() 方法")]),t._v(" "),s("li",[t._v("index() 方法")]),t._v(" "),s("li",[t._v("count() 方法")]),t._v(" "),s("li",[t._v("sort() 方法")]),t._v(" "),s("li",[t._v("reverse() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ironmen = [56, 8, 18, 14, 6]\n\nironmen.append(66)\nprint(ironmen)\nironmen.pop()\nprint(ironmen)\nironmen.insert(5, 66)\nironmen.remove(66)\nprint(ironmen)\nironmen.index(56)\nironmen.append(66)\nironmen.append(66)\nprint(ironmen.count(66))\nironmen.pop()\nironmen.sort()\nprint(ironmen)\nironmen.reverse()\nprint(ironmen)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h3",{attrs:{id:"tuple"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tuple"}},[t._v("#")]),t._v(" tuple")]),t._v(" "),s("p",[t._v("tuple 是一個不可變（immutable）的資料結構")]),t._v(" "),s("ul",[s("li",[t._v("index() 方法")]),t._v(" "),s("li",[t._v("count() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("my_tuple = (56, 8, 18, 14, 6, 6)\nprint(my_tuple.index(56))\nprint(my_tuple.count(6))\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"dictionary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dictionary"}},[t._v("#")]),t._v(" dictionary")]),t._v(" "),s("ul",[s("li",[t._v("get() 方法")]),t._v(" "),s("li",[t._v("keys() 方法")]),t._v(" "),s("li",[t._v("items() 方法")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ironmen_dict = {"Modern Web": 56,\n                "DevOps": 8,\n                "Cloud": 18,\n                "Big Data": 14,\n                "Security": 6,\n                "自我挑戰組": 66\n                }\n\nprint(ironmen_dict.get("Modern Web"))\nprint(ironmen_dict.keys())\nprint(ironmen_dict.items())\nprint(ironmen_dict.values())\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);
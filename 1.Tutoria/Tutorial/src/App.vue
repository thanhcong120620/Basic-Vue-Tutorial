<script setup>
import { nextTick, ref, reactive, computed } from 'vue'
//Dùng reactive chỉ dùng khi cần theo dõi 1 object thôi, theo dõi int hoặc string ko đc

const message = 'Nguyễn Thành Công'
const vHtml = '<h1>Title</h1><p style="color:red; font-weight:bold">Hé lô V-HTML</p>'
const dynamicId11 = 'dynamicId21'
const dynamicId12 = 'dynamicId22'
const btnid = 'btnId'
const btnclass = 'btnClass1 btnClass2'
const isButtonDisabled = false
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
const number = 0
const listString = 'a,b,v,d,e,f,g,h,i,'
const convertToId = (data) => data.split(',').reverse().join('=')
const attributeName = 'href'
const url =
  'https://docs.google.com/spreadsheets/d/1d3BzNfpeMVfYXSS3HNybCd9Yh0Ixuou6/edit?gid=1520971481#gid=1520971481'
const count = ref(100)
count.value++
const Increase = () => (count.value = count.value * 4)
const object = ref({
  count: 120620,
  user: {
    age: 18
  },
  array: [1, 2, 3]
})
const Change = () => {
  object.value.count++
  object.value.count = object.value.count + 10000
  object.value.user.age = object.value.user.age + 123
  object.value.array.push('Nguyễn Thành Cônng', 'Đẹp trai')
}

//Lesson 12: nextTick()
const countLesson12 = ref(0)
const IncreaseLesson12 = async () => {
  countLesson12.value++
  console.log('Trước khi dùng nextTick()' + document.getElementById('countLesson12').innerText)
  await nextTick()
  console.log('Sau khi dùng nextTick()' + document.getElementById('countLesson12').innerText)
}

//Lesson 13: Computed()
const book = reactive({
  name: 'Naruto',
  chapter: []
})
const addChapter = () => {
  book.chapter.push('Chapter')
}
const isPublished = () =>
  computed(() => {
    return book.chapter.length > 0 ? 'Đã xuất bản' : 'Chưa xuất bản'
  })

//Lesson 14: Writable computed
const FirstName = ref('Nguyễn Văn')
const LastName = ref('A')
const FullName = computed({
  get() {
    return FirstName.value + ' ' + LastName.value
  },
  set(newValue) {
    ;[FirstName.value, LastName.value] = newValue.split(',')
  }
})
const ChangeName = () => {
  FullName.value = 'Nguyễn Vănn,B'
}

//Lesson 15: Binding Class
const isActive = ref(true)
const hasError = ref(false)
const errorClass = ref('has-error')
// const objectClass = reactive({
//   active: true,
//   'has-error': true
// })
const objectClass = computed(() => ({
  active: isActive.value,
  'has-error': hasError.value
}))

const changeActive = () => {
  isActive.value = !isActive.value
}

//Lesson 16: Binding Style
const color = ref('white')
const background = ref('black')
const fontSize = ref(30)
const styleObject = reactive({
  border: 'none',
  borderRadius: '6px',
  color: 'red'
})

//Lesson 17: Rendering theo điều kiện
const isLoggedIn = ref(false)
const toggledLogIn = () => {
  isLoggedIn.value = !isLoggedIn.value
}
const userStatus = ref('Online')
const changeUserStatus = () => {
  if (userStatus.value === 'Online') {
    userStatus.value = 'Away'
  } else if (userStatus.value === 'Away') {
    userStatus.value = 'Busy'
  } else if (userStatus.value === 'Busy') {
    userStatus.value = 'Online'
  }
}
const isVisible = ref(false)
const toggledShow = () => {
  isVisible.value = !isVisible.value
}

//Lesson 18,19,20: v-for
const shoppingItems = ref([
  {
    name: 'apples',
    price: 2000
  },
  {
    name: 'Mango',
    price: 126
  },
  {
    name: 'Banana',
    price: 12620
  }
])
const user = ref({
  firstName: 'John',
  LastName: 'Doe',
  age: 25
})
const users = ref([
  { name: 'John', age: 25, isActive: true },
  { name: 'Doe', age: 35, isActive: false },
  { name: 'Bod', age: 45, isActive: true },
  { name: 'Carol', age: 55, isActive: false }
])

//Lesson 21: hực hành xây dựng todo app với vuejs
const todos = reactive([
  { id: 1, text: 'Learn VueJS' },
  { id: 2, text: 'Build To do App VueJS' }
])

const newTodo = ref('')
const addNewTodo = () => {
  if (newTodo.value.trim() === '') {
    return
  }
  const todo = {
    id: todos.length + 1,
    text: newTodo.value
  }
  todos.push(todo)
  newTodo.value = ''
}

// Lesson 22: Xử lý sự kiện trong Vuejs
const countLesson22 = ref(0)
const greet = (event) => {
  console.log(event.target)
  alert('Xin chào, đây là event: ' + event.type)
}
const sayHi = (name) => {
  alert('Xin chào, tên tôi là: ' + name)
}

//Lesson 23: Đối số event trong Vuejs
const sayHi1 = () => {
  alert('Xin chào 1')
}
const sayHi2 = () => {
  alert('Xin chào 2')
}
const submit = () => {
  alert('Form submitted')
}

//Lesson 25, 26, 27: Xử lý form sử dụng v-model, checkbox, radio và select, Ràng buộc giá trị trong v-model
const text = ref('Hello world')
const handleInput = (e) => {
  text.value = e.target.value
}
const textVMode = ref('Hello v-model')
const multilineText = ref('')

const checkedNames = ref([])
const radioNames = ref()
const selected = ref('')

const checked = ref()
const firstOption = ref('First option')
const secondOption = ref('Second option')
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <p>My name is: {{ message }}</p>
    <span v-html="vHtml"></span>
    <div v-bind:id="dynamicId11">abv</div>
    <div :id="dynamicId12">ass</div>
    <button :id="btnid" :class="btnclass">Click here</button>
    <button :disabled="isButtonDisabled">
      {{ isButtonDisabled ? 'isButtonDisabled' : 'Click here' }}
    </button>
    <div v-bind="objectOfAttrs">Nguyễn Thành Công</div>
    <button :id="listString.split(',').join('+')">Number: {{ number + 1 }}</button>

    <button :id="convertToId(listString)">Number: {{ number }}</button>
    <a v-bind:[attributeName]="url">Click here</a>
  </div>

  <h1>Bài Ref</h1>
  <div>
    <p>Ref object count: {{ object.count }}</p>
    <p>Ref object User: {{ object.user.age }}</p>
    <p>Ref object Array: {{ object.array }}</p>
    <button @click="Change()">Increase</button>
  </div>
  <div>
    <p>Ref2: {{ count }}</p>
    <button @click="count = count * 3">Increase case * 3</button>
    <p>Ref3: {{ count }}</p>
    <button @click="Increase(count)">Increase case * 4</button>
  </div>

  <!-- Lesson 12: nextTick() -->
  <div>
    <p id="countLesson12">Lesson 12 - count: {{ countLesson12 }}</p>
    <button @click="IncreaseLesson12()">Increase</button>
  </div>

  <!-- Lesson 13: Computed -->
  <div>
    <p id="countLesson12">Lesson 13 - bookname: {{ book.name }}</p>
    <p id="countLesson12">Lesson 13 - Đã xuất bản: {{ isPublished() }}</p>
    <button @click="addChapter">Add Chapter</button>
  </div>

  <!-- Lesson 14: Writable computed  -->
  <div>
    <p id="countLesson12">Lesson 14 - Full Name: {{ FullName }}</p>
    <p id="countLesson12">Lesson 14 - First Name: {{ FirstName }}</p>
    <p id="countLesson12">Lesson 14 - Last Name: {{ LastName }}</p>
    <button @click="ChangeName">Change Full name</button>
  </div>

  <!-- Lesson 15: Binding Class  -->
  <div>
    <h1>Lesson 15</h1>
    <button @click="changeActive" class="button" :class="objectClass">
      {{ isActive ? 'Active' : 'Deactive' }}
    </button>
    <button @click="changeActive" class="button" :class="[isActive ? 'active' : '', errorClass]">
      {{ isActive ? 'Active' : 'Deactive' }}
    </button>
    <button
      @click="changeActive"
      class="button"
      :class="[isActive ? 'active' : '', { 'has-error': hasError }]"
    >
      {{ isActive ? 'Active' : 'Deactive' }}
    </button>
  </div>

  <!-- Lesson 16: Binding Style  -->
  <div>
    <h1>Lesson 16</h1>
    <button
      :style="[
        {
          color,
          background,
          fontSize: fontSize + 'px'
        }
      ]"
    >
      Lesson 16.1
    </button>
    <button :style="[styleObject]">Lesson 16.2</button>
    <button
      :style="[
        {
          color,
          background,
          fontSize: fontSize + 'px'
        },
        styleObject
      ]"
    >
      Button 16.3
    </button>
  </div>

  <!-- Lesson 17: Rendering theo điều kiện (Chi phí v-if lớn hơn v-show, nên cần cân nhắc)  -->
  <div>
    <h1>Lesson 17</h1>
    <h2 v-if="isLoggedIn">Chào mừng bạn đã đăng nhập</h2>
    <h2 v-else>Chào mừng khách</h2>
    <button @click="toggledLogIn">{{ isLoggedIn ? 'Đăng xuất' : 'Đăng nhập' }}</button>
    <br />
    <h2 v-if="userStatus === 'Online'">Người dùng đang Online</h2>
    <h2 v-else-if="userStatus === 'Away'">Người dùng đang Vắng mặt</h2>
    <h2 v-else-if="userStatus === 'Busy'">Người dùng đang Bận</h2>
    <h2 v-else>Người dùng không rõ trạng thái</h2>
    <button @click="changeUserStatus">Thay đổi trạng thái</button>
    <br />
    <h2 v-show="isVisible">Nội dung này ẩn hoặc hiển thị</h2>
    <button @click="toggledShow">{{ isVisible ? 'Ẩn' : 'Hiện' }}</button>
  </div>

  <!-- Lesson 18,19,20: v-for  -->
  <div>
    <ul>
      <li v-for="item in shoppingItems" :key="item.name">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <span v-for="n in 10" :key="n">{{ n + 1 }} - </span>
  </div>
  <br />
  <div>
    <ul>
      <li v-for="(value, key, index) in user" :key="key">{{ key }} : {{ value }} ({{ index }})</li>
    </ul>
  </div>
  <br />
  <div>
    <ul>
      <p>User đã Active</p>
      <template v-for="(user, index) in users">
        <li v-if="user.isActive" :key="user.name">
          {{ user.name }} : {{ user.isActive ? 'Active' : 'Deactive' }} ({{ index }})
        </li>
      </template>
      <p>User chưa Active</p>
      <template v-for="(user, index) in users">
        <li v-if="!user.isActive" :key="user.name">
          {{ user.name }} : {{ user.isActive ? 'Active' : 'Deactive' }} ({{ index }})
        </li>
      </template>
    </ul>
  </div>

  <!-- Lesson 21: Thực hành xây dựng todo app với vuejs  -->
  <div>
    <h1>Lesson 21: Thực hành xây dựng todo app với vuejs</h1>
    <span>Nhập công việc: </span>
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addNewTodo"
      placeholder="Nhập công việc tại đây, ví dụ: Học bài 22"
    />
    <button @click="addNewTodo">Add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }} - Id: {{ todo.id }}</li>
    </ul>
  </div>

  <!-- Lesson 22: Xử lý sự kiện trong Vuejs  -->
  <div>
    <h1>Lesson 22: Xử lý sự kiện trong Vuejs</h1>
    <button v-on:click="countLesson22++">Cộng thêm 1</button>
    <p>Count Lesson 22: {{ countLesson22 }}</p>
    <button @click="greet">Chào</button>
    <button @click="sayHi('Thành Công')">Chào Thành Công</button>
    <button @click="sayHi('Nguyễn Thành Công')">Chào Nguyễn Thành Công</button>
  </div>

  <!-- Lesson 23: Đối số event trong Vuejs  -->
  <div>
    <h1>Lesson 23: Đối số event trong Vuejs</h1>
    <button @click="sayHi1()"><button @click.stop="sayHi2()">Say hi 2</button>Say hi 1</button>
    <p>Submit load lại trang</p>
    <form @submit="submit">
      <button type="submit">Submit</button>
    </form>
    <p>Ngăn chặn 1 sự kiện hiện tại, submit ko load lại trang</p>
    <form @submit.prevent="submit">
      <button type="submit">Submit</button>
    </form>
    <p>Ngăn chặn 1 sự kiện hiện tại, submit ko load lại trang của component cha</p>
    <form @submit.prevent.stop="submit">
      <button type="submit">Submit</button>
    </form>
    <p>
      Đối số "self" kiểm tra sự kiện click có phải chính phần tử đó không, tránh sự lan truyền sự
      kiện
    </p>
    <button @click.self="sayHi1()"><button @click.self="sayHi2()">Say hi 2</button>Say hi 1</button>
  </div>

  <!-- Lesson 24: Key modifier khi xử lý event trong Vuejs  -->
  <div>
    <h1>Lesson 24: Key modifier khi xử lý event trong Vuejs</h1>
    <input type="text" @keyup.enter="submit" placeholder="Enter something then Press enter" />
    <input
      type="text"
      @keyup.enter.alt="submit"
      placeholder="Enter something then Press Alt + Enter"
    />
    <button @click.shift="submit">Submit</button>
  </div>

  <!-- Lesson 25, 26, 27: Xử lý form sử dụng v-model, checkbox, radio và select, Ràng buộc giá trị trong v-model   -->
  <div>
    <h1>
      Lesson 25, 26, 27: Xử lý form sử dụng v-model, checkbox, radio và select, Ràng buộc giá trị
      trong v-model
    </h1>
    <p>{{ text }}</p>
    <input :value="text" @input="handleInput" />
    <p>
      Sử dụng v-model, tự xử lý các event và gắn các giá trị theo từng loại input như checkbox,
      radio, ...
    </p>
    <p>{{ textVMode }}</p>
    <input v-model="textVMode" />
    <p>MultilineText: {{ multilineText }}</p>
    <textarea v-model="multilineText" placeholder="Type your message"></textarea>
    <p>Radio: {{ radioNames }}</p>
    <input id="a" type="radio" v-model="radioNames" value="A" />
    <label for="a">A</label>
    <input id="b" type="radio" v-model="radioNames" value="B" />
    <label for="b">B</label>
    <input id="c" type="radio" v-model="radioNames" value="C" />
    <label for="c">C</label>
    <p>Multiple checkbox: {{ checkedNames }}</p>
    <input id="a" type="checkbox" v-model="checkedNames" value="A" />
    <label for="a">A</label>
    <input id="b" type="checkbox" v-model="checkedNames" value="B" />
    <label for="b">B</label>
    <input id="c" type="checkbox" v-model="checkedNames" value="C" />
    <label for="c">C</label>
    <p>Select: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Select one</option>
      <option :value="{ name: 'A' }">A</option>
      <option :value="{ abc: 'sdffdg' }">B</option>
      <option>C</option>
    </select>
    <p>Checkbox: {{ checked }}</p>
    <input type="checkbox" v-model="checked" true-value="Yes" false-value="No" />
    <p>Radio: {{ radioNames }}</p>
    <input type="radio" v-model="radioNames" :value="firstOption" />
    <label for="a">A</label>
    <input type="radio" v-model="radioNames" :value="secondOption" />
    <label for="b">B</label>
  </div>

  <!-- Lesson 28: Modifiers với v-model trong vuejs  -->
  <div>
    <h1>Lesson 28: Modifiers với v-model trong vuejs</h1>
    <p>{{ textVMode }}</p>
    <input v-model.lazy="textVMode" />
    <p>{{ textVMode }} - {{ typeof textVMode }}</p>
    <input v-model.number="textVMode" />
    <p>{{ textVMode }} - {{ typeof textVMode }}</p>
    <input v-model.trim="textVMode" />
  </div>
</template>

<style>
.button {
  border: none;
  background: #ede9fe;
  color: #8b5cf6;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #c7d2fe;
  }
}
.active {
  background: #8b5cf6;
  color: #ede9fe;
  &:hover {
    background: #818cf8;
  }
}
.has-error {
  background: #ef4444;
  color: #fee2e2;
  &:hover {
    background: #f87171;
  }
}
</style>

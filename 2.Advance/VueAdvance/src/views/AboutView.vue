<script setup>
import {
  onMounted,
  onUnmounted,
  ref,
  onBeforeUnmount,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  watch,
  reactive,
  watchEffect
} from 'vue'

const time = ref(0)
// let intervalID = null

const count = ref(0)
const increment = () => {
  count.value++
}

onUpdated(() => {
  // console.log('On Updated: ' + document.getElementById('count').textContent)
})

onBeforeUpdate(() => {
  // console.log('On before update: ' + document.getElementById('count').textContent)
})

onBeforeMount(() => {
  //Hook này dùng để xử lý các tác vụ trước khi chạy hook onMounted
  // console.log('On Before Mount')
})

onMounted(() => {
  // console.log('onMounted')
  //Là một hook thiết lập các hệ thống Dom, khởi tạo các thư viện bên ngoài, thực hiện các tác vụ cần truy cập vào các Dom trong components
  // intervalID = setInterval(() => {
  //   time.value++
  // }, 1000)
})

onBeforeUnmount(() => {
  //Hook này dùng để xử lý các tác vụ trước khi chạy hook onUnmounted
  // clearInterval(intervalID)
  // console.log('On Before Unmount')
})

onUnmounted(() => {
  //Là một hook sau khi component bị gỡ ra khỏi Dom, hook unonmounted này thường được sử dụng dọn dẹp các tác vụ thiết lập trong mounted, đóng các kết nối trong server
  // console.log('onUnmounted')
})

//Lesson 34: Watchers trong vuejs là gì? ----------------------------------------------------------------
const countLesson34 = ref(0)
watch(countLesson34, (newValue, oldValue) => {
  console.log(`Count thay đổi từ ${oldValue} sang ${newValue}`)
})
const incrementLesson34 = () => {
  countLesson34.value++
}
const questionLesson34 = ref('')
const isLoadingLesson34 = ref(false)
const answerLesson34 = ref('')
watch(questionLesson34, async (newQuestion) => {
  // console.log('Lesson 34: ' + oldQuestion, newQuestion)
  if (newQuestion.includes('?')) {
    isLoadingLesson34.value = true
    answerLesson34.value = 'Đang suy nghĩ ...'
    try {
      const response = await fetch('https://yesno.wtf/api')
      answerLesson34.value = (await response.json()).answer
    } catch (error) {
      answerLesson34.value = 'Error ! Không thể call API'
    } finally {
      isLoadingLesson34.value = false
    }
  }
})

//Lesson 34: Watchers trong vuejs là gì? ----------------------------------------------------------------
const x = ref(0)
const y = ref(0)

watch(
  () => x.value + y.value,

  async (sum) => {
    console.log(`Tổng của x và y là ${sum}`)
  }
)

//Lesson 35, 36: Các loại source, deep và immediate của watch trong vuejs ----------------------------------------------------------------
watch([x, () => y.value + 1], ([newX, newY]) => {
  console.log(`Giá trị cập nhật: ${newX}, ${newY}`)
})

const incrementLesson35 = () => {
  ;(x.value = x.value + 1), (y.value = y.value + 1)
}

const userLesson35 = reactive({
  age: 18
})

watch(
  //phải tạo 1 getter "() =>" vì watch không thể theo dõi thuộc tính của 1 đối tượng
  () => userLesson35.age,
  (newAge) => {
    console.log(`User age: ${newAge}`)
  }
)
const changeAgeLesson35 = () => {
  userLesson35.age = 20
}

const userLesson36 = reactive({
  age: 28,
  class: {
    students: 0,
    name: 'A'
  }
})
watch(
  //Mặc định watch là lazy
  userLesson36,
  (newUserLesson36, oldUserLesson36) => {
    console.log(
      `New user: ${JSON.stringify(newUserLesson36)}  Old user: ${JSON.stringify(oldUserLesson36)}`
    )
  },
  { deep: true, immediate: true }
)
const changeAgeLesson36 = () => {
  ;(userLesson36.age = 30), userLesson36.class.students++
}

//Lesson 37: watchEffect trong vue3  ----------------------------------------------------------------
watchEffect(() => {
  console.log(`Lesson 37 - Giá trị của x: ${x.value} - Giá trị của y: ${y.value}`)
})
watchEffect(() => {
  console.log(`Lesson 37 - User: ${JSON.stringify(userLesson36)}`)
})

//Lesson 38, 39: Template Refs, Refs trong v-for trong Vuejs  ----------------------------------------------------------------
const inputRefLesson38 = ref(null)
const listLesson38 = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])
const itemRefsLesson38 = ref([])

onMounted(() => {
  // inputRefLesson38.value.focus()
  itemRefsLesson38.value.forEach((item) => {
    item.style.transition = 'opacity 5s'
    item.style.opacity = 1
  })

  console.log(itemRefsLesson38.value)
})

//Lesson 40: Refs kiểu hàm trong Vuejs  -------------------------------------------------------------------------------------
const initializeThirdPartyLibrary = (el) => {
  console.log(el)
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Timer: {{ time }}</h2>
    <h2 id="count">Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
  </div>

  <!-- Lesson 34: Watchers trong VueJS  --------------------------------------------------------------------------------- -->
  <div>
    <h1>Lesson 34: Watchers trong vuejs là gì?</h1>
    <button @click="incrementLesson34">Increment</button>
    <p>Hỏi một câu hỏi có thể trả lời bằng "Yes" hoặc "NO"</p>
    <input v-model="questionLesson34" :disabled="isLoadingLesson34" />
    <p>Answer: {{ answerLesson34 }}</p>
  </div>

  <!-- Lesson 35, 36: Các loại source, deep và immediate của watch trong vuejs ----------------------------------------------------------- -->
  <div>
    <h1>Lesson 35, 36: Các loại source, deep và immediate của watch trong vuejs</h1>
    <p>x: {{ x }} - y: {{ y }}</p>
    <button @click="incrementLesson35">Increment</button>
    <p>User age: {{ userLesson35.age }}</p>
    <button @click="changeAgeLesson35">Change age</button>
    <p>User lesson 36: {{ userLesson36 }}</p>
    <button @click="changeAgeLesson36">Change user age</button>
  </div>

  <!-- Lesson 37: watchEffect trong vue3 ----------------------------------------------------------- -->
  <div>
    <h1>Lesson 37: watchEffect trong vue3</h1>
    <p>x: {{ x }} - y: {{ y }}</p>
    <button @click="changeAgeLesson36">Change user age</button>
  </div>

  <!-- Lesson 38, 39: Template Refs, Refs trong v-for trong Vuejs ----------------------------------------------------------- -->
  <div>
    <h1>Lesson 38, 39: Template Refs, Refs trong v-for trong Vuejs</h1>
    <input ref="inputRefLesson38" placeholder="Type something . . ." />
    <p>
      Có thể tham chiếu các thư viện Javascript bên ngoài đến các phần tử DOM; Cần quản lý các trạng
      thái của các DOM riêng lẻ; Lưu trữ trạng thái trên các checkbox, input; Tối ưu hóa hiệu suất
      bằng cách tránh tìm các phần tử trên DOM nhiều lần
    </p>
    <ul>
      <li
        v-for="(item, index) in listLesson38"
        :key="index"
        ref="itemRefsLesson38"
        style="opacity: 0"
      >
        {{ item }}
      </li>
    </ul>
  </div>

  <!-- Lesson 40: Refs kiểu hàm trong Vuejs ----------------------------------------------------------- -->
  <div>
    <h1>Lesson 40: Refs kiểu hàm trong Vuejs</h1>
    <input
      :ref="
        (el) => {
          initializeThirdPartyLibrary(el)
        }
      "
    />
    <ul>
      <li
        v-for="(item, index) in listLesson38"
        :key="index"
        style="opacity: 0"
        :ref="(el) => (itemRefsLesson38[index] = el)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

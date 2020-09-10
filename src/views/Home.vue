<template>
  <el-container>
    <el-main>
      <el-tabs v-model="name">
        <el-tab-pane
          v-for="data in questionData"
          :key="data.name"
          :name="data.name"
          :label="data.label"
        >
          <div class="el-tab-pane__actions">
            <div class="accordion-switcher">
              <span class="accordion-switcher__label">
                accordion
              </span>
              <el-switch v-model="accordion" />
            </div>
            <el-input
              :placeholder="`Поиск по ${name}`"
              v-model="search"
            />
          </div>
          <el-row :gutter="10">
            <el-col
              v-for="column in data.columns"
              :key="`column-${column}`"
              :xs="24"
              :sm="Math.round(24 / Number(data.columns))"
            >
              <el-collapse
                v-model="data.collapse"
                :accordion="accordion"
              >
                <el-collapse-item
                  v-for="(question, index) in data.questions[column - 1]"
                  :key="`collapse-${column}-${index}`"
                  :name="`collapse-${column}-${index}`"
                  :title="question.title"
                >
                  <div v-html="question.content" />
                </el-collapse-item>
              </el-collapse>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import { chunk, debounce } from 'lodash'
import { js, css } from '../../questionData'

export default {
  data: () => ({
    search: '',
    accordion: false,
    name: 'js',
    questions: { js, css },
    rawData: [
      { name: 'js', label: 'JavaScript', columns: 2, questions: js },
      { name: 'css', label: 'CSS', columns: 2, questions: css }
    ]
  }),

  computed: {
    questionData () {
      return this.rawData
        .map(data => ({
          ...data,
          collapse: [],
          columns: data.columns > 1 && data.questions.length > data.columns ? data.columns : 1,
          questions: data.columns > 1 && data.questions.length > data.columns
            ? chunk([...data.questions], Math.ceil(data.questions.length / data.columns))
            : [data.questions]
        }))
    }
  },

  watch: {
    search: {
      handler: debounce(function (value) {
        const index = this.rawData.findIndex(data => data.name === this.name)

        if (value.length > 0) {
          const questions = this.rawData[index].questions
          this.rawData[index].questions = questions.filter(question => question.title.includes(value))
        } else {
          this.rawData[index].questions = this.questions[this.name]
        }
      }, 200)
    }
  },

  mounted () {
    console.log(this.questionData, this.rawData)
  }
};
</script>

<style lang="scss">
.el-tabs__item {
  font-size: 16px;
}

.el-collapse-item__header {
  font-size: 17px;
  font-weight: 700;
}

.el-collapse-item__content > div {
  font-size: 16px;
}

.el-tab-pane__actions {
  display: flex; 
  align-items: center; 
  margin-bottom: 8px;
}

.accordion-switcher {
  margin-right: 8px;

  &__label {
    display: block; 
    margin-bottom: 5px; 
    font-size: 12px;
  }
}
</style>

<template>
  <div class="all-activities">
    <ul class="activities">
      <li class="activity" v-for="activity in sortedActivities">
        <a :href="activity.url" target="_blank">
          <div class="datetime">{{activity.datetime | moment('YYYY/MM/DD HH:mm')}}</div>
          <Icon :name="activity.icon" scale="5"></Icon>
          <div class="title">{{activity.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import { mapState } from 'vuex'

export default {
  beforeMount: function () {
    this.$store.dispatch('getGithubCommitActivities')
    this.$store.dispatch('getHatenaBlogActivities')
    this.$store.dispatch('getQiitaAcitivities')
  },
  computed: {
    ...mapState({
      activities: 'activities',
      sortedActivities: state => {
        return state.activities.sort((activity, otherActivity) => {
          let activityDate = new Date(activity.datetime)
          let otherActivityDate = new Date(otherActivity.datetime)
          return otherActivityDate.getTime() - activityDate.getTime()
        })
      }
    })
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
.all-activities {
  display: block;
}

.activities {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.activities .activity {
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 10px 0;
  text-align: left;
  font-size: calc(15px + 0.2vw);

  .datetime {
    display: block;
    padding: 5px;
    font-size: calc(20px + 0.2vw);
  }

  &:hover {
    background-color: #f4f4f4;
  }

  a {
    padding: 20px 10px;
    color: #000;
    display: block;
    text-decoration: none;
  }

  .title {
    margin-top: 10px;
    padding: 10px;
  }

  .fa-icon {
    position: absolute;
    vertical-align: middle;
    color: rgba(100, 100, 100, 0.3);
    right: 20px;
    bottom: 0;
  }
}
</style>

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
}

.activities .activity {
  position: relative;
  width: 780px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 10px 0;
  text-align: left;
  font-size: 1.4rem;

  .datetime {
    display: block;
    padding: 5px;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #f4f4f4;
  }

  a {
    padding: 20px 10px;
    color: #000;
    display: block;
    width: 100%;
    text-decoration: none;
  }

  .title {
    margin-top: 10px;
    padding: 10px;
  }

  .fa-icon {
    position: absolute;
    vertical-align: middle;
    color: #ccc;
    right: 20px;
    bottom: 0;
  }
}

@media (max-width: 780px) {
  .activities .activity {
    width: 100%;
    font-size: 2.8rem;
    .datetime {
      padding: 15px;
      font-size: 2rem;
    }
  }
}
</style>

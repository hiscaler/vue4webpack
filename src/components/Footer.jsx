import '../assets/styles/footer.css'
export default {
  data() {
    return {
      author: "Hiscaler",
    }
  },
  render() {
    return (
      <div class="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
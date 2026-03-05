const supabase = require('../config/supabase');

const getNegocios = async (req, res) => {
  try {
    const { data, error } = await supabase.from('negocios').select('*');

    if (error) {
      return res.status(500).json({
        ok: false,
        step: 'query negocios',
        error: error.message,
        details: error,
      });
    }

    return res.json({
      ok: true,
      data,
    });
  } catch (e) {
    return res.status(500).json({
      ok: false,
      step: 'exception',
      error: e.message,
    });
  }
};

const getNegocio = async (req, res) => {
  try 
  {
    const NegocioUser = req.user.negocio_id;
    const {data, erro } = await supabase
    .from('negocios')
    .select('*')
    .eq('id', NegocioUser)
    .single();
    return res.json({
      ok: true,
      data,
    });
  }
  catch (e) {
    return res.status(500).json({
      ok: false,
      step: 'exception',
      error: e.message,
    });
  }
};

module.exports = {
  getNegocios,
  getNegocio,
};